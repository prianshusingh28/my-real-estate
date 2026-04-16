import { MapPin, CheckCircle, ChevronDown, Star, Sparkles } from 'lucide-react';
import newhouse from '../../assets/newhouse.png';

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={newhouse}
          alt="DS Prime Homes"
          className="w-full h-full object-cover"
        />
        {/* Enhanced gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 via-blue-900/40 to-slate-900/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
      </div>

      {/* Floating elements for premium feel */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-xl animate-pulse" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-slide-up">
        <div className="flex items-center justify-center gap-2 mb-6">
          <Sparkles className="w-5 h-5 text-cyan-400" />
          <p className="text-cyan-300 font-semibold text-sm tracking-widest uppercase">DS Prime Homes</p>
          <Sparkles className="w-5 h-5 text-cyan-400" />
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight">
          Premium Flats for Rent in{' '}
          <span className="text-gradient block md:inline">Ormanjhi, Ranchi</span>
        </h1>

        <p className="text-slate-300 text-xl md:text-2xl mb-8 font-light">
          Luxury 1RK • 2BHK • 3BHK Apartments Available
        </p>

        {/* Price showcase */}
        <div className="flex justify-center gap-6 mb-10 flex-wrap">
          <div className="glass px-6 py-3 rounded-full">
            <div className="text-cyan-300 text-sm font-semibold">1RK</div>
            <div className="text-white text-lg font-bold">₹7,500/mo</div>
          </div>
          <div className="glass px-6 py-3 rounded-full">
            <div className="text-blue-300 text-sm font-semibold">2BHK</div>
            <div className="text-white text-lg font-bold">₹13,000/mo</div>
          </div>
          <div className="glass px-6 py-3 rounded-full">
            <div className="text-purple-300 text-sm font-semibold">3BHK</div>
            <div className="text-white text-lg font-bold">₹22,000/mo</div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button
            onClick={() => scrollTo('properties')}
            className="btn-gradient px-8 py-4 text-lg font-bold shadow-2xl"
          >
            Explore Properties
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="btn-gradient-secondary px-8 py-4 text-lg font-bold"
          >
            Book Visit
          </button>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="glass p-4 rounded-2xl text-center">
            <MapPin className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
            <div className="text-white font-semibold text-sm">Prime Location</div>
            <div className="text-slate-400 text-xs">Ormanjhi, Ranchi</div>
          </div>
          <div className="glass p-4 rounded-2xl text-center">
            <CheckCircle className="w-6 h-6 text-green-400 mx-auto mb-2" />
            <div className="text-white font-semibold text-sm">Zero Brokerage</div>
            <div className="text-slate-400 text-xs">Direct from Owner</div>
          </div>
          <div className="glass p-4 rounded-2xl text-center">
            <Star className="w-6 h-6 text-amber-400 mx-auto mb-2" />
            <div className="text-white font-semibold text-sm">Premium Amenities</div>
            <div className="text-slate-400 text-xs">Modern Facilities</div>
          </div>
        </div>
      </div>

      {/* Scroll Button */}
      <button
        onClick={() => scrollTo('properties')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 hover:text-white transition-colors animate-bounce"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
}
