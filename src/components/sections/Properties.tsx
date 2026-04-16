import { useState, useMemo } from 'react';
import { SlidersHorizontal, Search, Sparkles } from 'lucide-react';
import { properties } from '../../data/properties';
import { Property, FlatType } from '../../types';
import PropertyCard from '../ui/PropertyCard';
import PropertyModal from '../ui/PropertyModal';

type PriceRange = 'all' | 'under10k' | '10k-20k' | 'above20k';

const typeOptions: { value: FlatType | 'all'; label: string }[] = [
  { value: 'all', label: 'All Types' },
  { value: '1RK', label: '1RK' },
  { value: '2BHK', label: '2BHK' },
  { value: '3BHK', label: '3BHK' },
];

const priceOptions: { value: PriceRange; label: string }[] = [
  { value: 'all', label: 'Any Price' },
  { value: 'under10k', label: 'Under ₹10,000' },
  { value: '10k-20k', label: '₹10,000 – ₹20,000' },
  { value: 'above20k', label: 'Above ₹20,000' },
];

export default function Properties() {
  const [selectedType, setSelectedType] = useState<FlatType | 'all'>('all');
  const [priceRange, setPriceRange] = useState<PriceRange>('all');
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);

  const filtered = useMemo(() => {
    return properties.filter(p => {
      const typeMatch = selectedType === 'all' || p.type === selectedType;
      const priceMatch =
        priceRange === 'all' ||
        (priceRange === 'under10k' && p.price < 10000) ||
        (priceRange === '10k-20k' && p.price >= 10000 && p.price <= 20000) ||
        (priceRange === 'above20k' && p.price > 20000);
      return typeMatch && priceMatch;
    });
  }, [selectedType, priceRange]);

  const btnBase = 'text-sm font-semibold px-6 py-3 rounded-full transition-all duration-300';
  const btnActive = 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/25';
  const btnInactive = 'glass text-slate-300 hover:text-white hover:bg-white/10';

  return (
    <section id="properties" className="section-padding relative">
      {/* Background Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-purple-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-cyan-400" />
            <span className="text-cyan-400 font-semibold text-sm tracking-widest uppercase">Our Properties</span>
            <Sparkles className="w-5 h-5 text-cyan-400" />
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
            Find Your <span className="text-gradient">Perfect Home</span>
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
            All flats are ready to move in with zero brokerage. Direct owner contact for hassle-free renting.
          </p>
        </div>

        {/* Filter Section */}
        <div className="glass rounded-3xl p-6 mb-12 shadow-2xl">
          <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center">
            <div className="flex items-center gap-3 flex-shrink-0">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                <SlidersHorizontal className="w-5 h-5 text-white" />
              </div>
              <span className="text-white font-semibold text-lg">Filter Properties</span>
            </div>

            <div className="flex flex-wrap gap-3">
              {typeOptions.map(opt => (
                <button
                  key={opt.value}
                  onClick={() => setSelectedType(opt.value as FlatType | 'all')}
                  className={`${btnBase} ${selectedType === opt.value ? btnActive : btnInactive}`}
                >
                  {opt.label}
                </button>
              ))}
            </div>

            <div className="hidden lg:block w-px h-8 bg-white/20" />

            <div className="flex flex-wrap gap-3">
              {priceOptions.map(opt => (
                <button
                  key={opt.value}
                  onClick={() => setPriceRange(opt.value)}
                  className={`${btnBase} ${priceRange === opt.value ? btnActive : btnInactive}`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-20 glass rounded-3xl">
            <Search className="w-16 h-16 text-slate-400 mx-auto mb-6" />
            <h3 className="text-white font-semibold text-2xl mb-2">No properties match your filters</h3>
            <p className="text-slate-400 text-lg mb-6">Try adjusting your filter criteria</p>
            <button
              onClick={() => { setSelectedType('all'); setPriceRange('all'); }}
              className="btn-gradient px-8 py-3 text-lg font-semibold"
            >
              Clear all filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {filtered.map((property, index) => (
              <div key={property.id} style={{ animationDelay: `${index * 0.1}s` }} className="animate-fade-in">
                <PropertyCard property={property} onViewDetails={setSelectedProperty} />
              </div>
            ))}
          </div>
        )}
      </div>

      {selectedProperty && (
        <PropertyModal property={selectedProperty} onClose={() => setSelectedProperty(null)} />
      )}
    </section>
  );
}
