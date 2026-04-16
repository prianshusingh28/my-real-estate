import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, MapPin, IndianRupee, CheckCircle, Phone, MessageCircle, Bed, Bath, Square, Sparkles } from 'lucide-react';
import { Property } from '../../types';

interface PropertyModalProps {
  property: Property;
  onClose: () => void;
}

const OWNER_PHONE = '7091075142';

export default function PropertyModal({ property, onClose }: PropertyModalProps) {
  const [imgIndex, setImgIndex] = useState(0);

  const prev = () => setImgIndex(i => (i === 0 ? property.images.length - 1 : i - 1));
  const next = () => setImgIndex(i => (i === property.images.length - 1 ? 0 : i + 1));

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-fade-in" onClick={onClose}>
      <div
        className="glass-dark rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto animate-slide-up"
        onClick={e => e.stopPropagation()}
      >
        <div className="relative">
          <div className="relative aspect-video overflow-hidden rounded-t-3xl">
            <img
              src={property.images[imgIndex]}
              alt={`${property.title} - image ${imgIndex + 1}`}
              className="w-full h-full object-cover transition-all duration-500"
            />
            {/* Enhanced gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-transparent to-purple-500/20" />

            {property.images.length > 1 && (
              <>
                <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 glass hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 glass hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <ChevronRight className="w-6 h-6" />
                </button>
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                  {property.images.map((_, i) => (
                    <button key={i} onClick={() => setImgIndex(i)} className={`w-3 h-3 rounded-full transition-all duration-300 ${i === imgIndex ? 'bg-white scale-125' : 'bg-white/40 hover:bg-white/60'}`} />
                  ))}
                </div>
              </>
            )}

            {/* Type and Availability Badges */}
            <div className="absolute top-6 left-6 flex gap-3">
              <span className={`text-sm font-bold px-4 py-2 rounded-full shadow-lg ${
                property.type === '1RK' ? 'bg-gradient-to-r from-slate-500 to-slate-600' :
                property.type === '2BHK' ? 'bg-gradient-to-r from-cyan-500 to-blue-500' :
                'bg-gradient-to-r from-purple-500 to-pink-500'
              } text-white backdrop-blur-sm`}>
                {property.type}
              </span>
              {property.available && (
                <span className="text-sm font-semibold bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2 backdrop-blur-sm">
                  <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                  Available
                </span>
              )}
            </div>

            {/* Price Badge */}
            <div className="absolute top-6 right-6">
              <div className="glass text-white text-xl font-bold px-6 py-3 rounded-full shadow-lg flex items-center gap-2">
                <IndianRupee className="w-5 h-5" />
                {property.price.toLocaleString('en-IN')}
                <span className="text-slate-300 font-normal text-sm">/mo</span>
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-12 h-12 glass hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 z-10"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-8">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-8">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-5 h-5 text-cyan-400" />
                <h2 className="text-2xl lg:text-3xl font-black text-white">{property.title}</h2>
              </div>
              <p className="flex items-center gap-2 text-slate-300 text-base">
                <MapPin className="w-5 h-5 text-cyan-400" />
                Ormanjhi, Ranchi, Jharkhand
              </p>
            </div>
          </div>

          {/* Property Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="glass p-4 rounded-2xl text-center">
              <Bed className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
              <div className="text-white font-bold text-lg">{getBedCount(property.type)} Bedroom{getBedCount(property.type) > 1 ? 's' : ''}</div>
              <div className="text-slate-400 text-sm">Comfortable Space</div>
            </div>
            <div className="glass p-4 rounded-2xl text-center">
              <Bath className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
              <div className="text-white font-bold text-lg">{getBathCount(property.type)} Bathroom{getBathCount(property.type) > 1 ? 's' : ''}</div>
              <div className="text-slate-400 text-sm">Modern Fittings</div>
            </div>
            <div className="glass p-4 rounded-2xl text-center">
              <Square className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
              <div className="text-white font-bold text-lg">{property.size}</div>
              <div className="text-slate-400 text-sm">Square Feet</div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="font-bold text-white mb-4 text-xl flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-cyan-400" />
              About this Property
            </h3>
            <p className="text-slate-300 text-base leading-relaxed">{property.fullDesc}</p>
          </div>

          <div className="mb-8">
            <h3 className="font-bold text-white mb-4 text-xl flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              Premium Amenities
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {property.amenities.map(a => (
                <div key={a} className="glass border border-green-500/20 rounded-xl px-4 py-3 flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-white text-sm font-medium">{a}</span>
                </div>
              ))}
            </div>
          </div>

          {property.highlights.length > 0 && (
            <div className="mb-8">
              <h3 className="font-bold text-white mb-4 text-xl flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-400" />
                Property Highlights
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {property.highlights.map(h => (
                  <div key={h} className="flex items-center gap-3 glass rounded-xl px-4 py-3">
                    <span className="w-2 h-2 rounded-full bg-amber-400 flex-shrink-0 animate-pulse" />
                    <span className="text-slate-300 text-sm">{h}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-white/10">
            <a
              href={`tel:+91${OWNER_PHONE}`}
              className="flex-1 btn-gradient py-4 text-lg font-bold shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center gap-3"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
            <a
              href={`https://wa.me/91${OWNER_PHONE}?text=Hi, I'm interested in the ${property.title} flat. Please share more details.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 text-white font-bold py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/25 flex items-center justify-center gap-3"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
