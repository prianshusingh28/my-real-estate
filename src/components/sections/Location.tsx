import { MapPin, Navigation, Clock, Bus, Sparkles, Shield, Heart, GraduationCap } from 'lucide-react';

const landmarks = [
  { icon: Bus, label: 'Bus Stop', value: '2 min walk', color: 'text-cyan-400' },
  { icon: Navigation, label: 'Ranchi City', value: '15 km away', color: 'text-blue-400' },
  { icon: Clock, label: 'RIMS Hospital', value: '20 min drive', color: 'text-green-400' },
  { icon: MapPin, label: 'Ormanjhi Market', value: '5 min walk', color: 'text-purple-400' },
  { icon: GraduationCap, label: 'Calcutta Public School', value: '800 m', color: 'text-amber-400' },
  { icon: Shield, label: 'Ormanjhi Police Station', value: '1.2 km', color: 'text-red-400' },
];

export default function Location() {
  return (
    <section id="location" className="section-padding relative">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-cyan-400" />
            <span className="text-cyan-400 font-semibold text-sm tracking-widest uppercase">Prime Location</span>
            <Sparkles className="w-5 h-5 text-cyan-400" />
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
            Perfectly Located in <span className="text-gradient">Ormanjhi</span>
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Strategically positioned with excellent connectivity to key areas in Ranchi. Your gateway to convenience and comfort.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2">
            <div className="glass rounded-3xl overflow-hidden shadow-2xl aspect-video">
              <iframe
                title="DS Prime Homes Location - Ormanjhi, Ranchi"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3660.123456789!2d85.2833!3d23.3441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e1234567890%3A0xabcdef1234567890!2sOrmanjhi%2C+Ranchi%2C+Jharkhand!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-3xl"
              />
            </div>
          </div>

          <div className="space-y-6">
            {/* Location Card */}
            <div className="glass rounded-3xl p-8 shadow-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <MapPin className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="font-black text-white text-xl">DS Prime Homes</p>
                  <p className="text-cyan-300 text-sm font-medium">Your Dream Home</p>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-slate-300">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm">Ormanjhi, Ranchi</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <Shield className="w-4 h-4 text-green-400" />
                  <span className="text-sm">Jharkhand – 835219</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <Heart className="w-4 h-4 text-red-400" />
                  <span className="text-sm">India</span>
                </div>
              </div>

              <a
                href="https://maps.google.com/?q=Ormanjhi,Ranchi,Jharkhand"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gradient w-full py-3 text-base font-bold shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center gap-2"
              >
                <Navigation className="w-5 h-5" />
                Get Directions
              </a>
            </div>

            {/* Nearby Places */}
            <div className="glass rounded-3xl p-6 shadow-2xl">
              <h3 className="font-bold text-white text-lg mb-6 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-400" />
                Nearby Places
              </h3>
              <div className="space-y-4">
                {landmarks.map(({ icon: Icon, label, value, color }) => (
                  <div key={label} className="flex items-center justify-between p-3 glass rounded-xl hover:bg-white/5 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-slate-700/50 rounded-xl flex items-center justify-center">
                        <Icon className={`w-5 h-5 ${color}`} />
                      </div>
                      <span className="text-white font-medium text-sm">{label}</span>
                    </div>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full bg-slate-700/50 ${color.replace('text-', 'text-')}`}>{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
