import { IndianRupee, MapPin, Eye, Bed, Bath, Square } from 'lucide-react';
import { Property } from '../../types';

interface PropertyCardProps {
  property: Property;
  onViewDetails: (property: Property) => void;
}

const typeColors: Record<string, string> = {
  '1RK': 'bg-gradient-to-r from-slate-600 to-slate-700 text-white',
  '2BHK': 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white',
  '3BHK': 'bg-gradient-to-r from-purple-500 to-pink-500 text-white',
};

const typeBadgeColors: Record<string, string> = {
  '1RK': 'bg-gradient-to-r from-slate-500 to-slate-600',
  '2BHK': 'bg-gradient-to-r from-cyan-500 to-blue-500',
  '3BHK': 'bg-gradient-to-r from-purple-500 to-pink-500',
};

export default function PropertyCard({ property, onViewDetails }: PropertyCardProps) {
  const getBedCount = (type: string) => {
    if (type === '1RK') return 1;
    if (type === '2BHK') return 2;
    if (type === '3BHK') return 3;
    return 1;
  };

  const getBathCount = (type: string) => {
    if (type === '1RK') return 1;
    if (type === '2BHK') return 2;
    if (type === '3BHK') return 2;
    return 1;
  };

  return (
    <article className="group card-glass overflow-hidden hover:scale-105 hover:-translate-y-2 transition-all duration-500 cursor-pointer animate-fade-in">
      <div className="relative overflow-hidden aspect-[4/3] rounded-t-3xl">
        <img
          src={property.images[0]}
          alt={`${property.title} - ${property.type} flat for rent in Ormanjhi Ranchi`}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          loading="lazy"
        />
        {/* Enhanced gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10" />

        {/* Type and Availability Badges */}
        <div className="absolute top-4 left-4 flex items-center gap-3">
          <span className={`text-sm font-bold px-4 py-2 rounded-full shadow-lg ${typeBadgeColors[property.type]} text-white backdrop-blur-sm`}>
            {property.type}
          </span>
          {property.availableCount > 0 && (
            <span className="text-sm font-semibold bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2 backdrop-blur-sm">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
              Available
            </span>
          )}
        </div>

        {/* Price Badge */}
        <div className="absolute bottom-4 right-4">
          <span className="glass text-white text-lg font-bold px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
            <IndianRupee className="w-4 h-4" />
            {property.price.toLocaleString('en-IN')}
            <span className="text-slate-300 font-normal text-sm">/mo</span>
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3 className="font-bold text-white text-lg leading-tight">{property.title}</h3>
        </div>

        <p className="text-slate-300 text-sm leading-relaxed mb-6 line-clamp-2">
          {property.shortDesc}
        </p>

        {/* Property Details with Icons */}
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="flex items-center gap-2 text-slate-300">
            <Bed className="w-4 h-4 text-cyan-400" />
            <span className="text-sm">{getBedCount(property.type)} Bed</span>
          </div>
          <div className="flex items-center gap-2 text-slate-300">
            <Bath className="w-4 h-4 text-cyan-400" />
            <span className="text-sm">{getBathCount(property.type)} Bath</span>
          </div>
          <div className="flex items-center gap-2 text-slate-300">
            <Square className="w-4 h-4 text-cyan-400" />
            <span className="text-sm">{property.size} sq ft</span>
          </div>
        </div>

        {/* Availability Information */}
        <div className="flex items-center justify-between mb-4">
          <div className="text-slate-300 text-sm">
            <span className="font-medium">Total: {property.totalFlats} flats</span>
            <span className="mx-2">•</span>
            <span className="font-medium">Available: {property.availableCount}</span>
          </div>
          <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
            property.availableCount > 0
              ? 'bg-green-500/20 text-green-300 border border-green-500/30'
              : 'bg-red-500/20 text-red-300 border border-red-500/30'
          }`}>
            {property.availableCount > 0 ? 'Available' : 'Fully Occupied'}
          </div>
        </div>

        <div className="flex items-center gap-2 text-slate-300 mb-6">
          <MapPin className="w-4 h-4 text-cyan-400" />
          <span className="text-sm">{property.floor}</span>
        </div>

        {/* Amenities */}
        <div className="flex flex-wrap gap-2 mb-6">
          {property.amenities.slice(0, 3).map(a => (
            <span key={a} className={`text-xs font-medium px-3 py-1.5 rounded-full ${typeColors[property.type]} shadow-sm`}>
              {a}
            </span>
          ))}
          {property.amenities.length > 3 && (
            <span className="text-xs font-medium px-3 py-1.5 rounded-full bg-slate-700/50 text-slate-300 backdrop-blur-sm">
              +{property.amenities.length - 3} more
            </span>
          )}
        </div>

        <button
          onClick={() => onViewDetails(property)}
          disabled={property.availableCount === 0}
          className={`w-full py-3 text-sm font-semibold shadow-lg transition-all duration-300 ${
            property.availableCount === 0
              ? 'bg-slate-600/50 text-slate-400 cursor-not-allowed opacity-60'
              : 'btn-gradient hover:shadow-cyan-500/25'
          }`}
        >
          <div className="flex items-center justify-center gap-2">
            <Eye className="w-4 h-4" />
            {property.availableCount === 0 ? 'Fully Occupied' : 'View Details'}
          </div>
        </button>
      </div>
    </article>
  );
}
