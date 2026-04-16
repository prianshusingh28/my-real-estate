import { useState } from 'react';
import { Phone, MessageCircle, User, Mail, Send, CheckCircle, Calendar, Sparkles, Heart } from 'lucide-react';

const OWNER_PHONE = '7091075142';
const OWNER_NAME = 'Priyanshu Singh';

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  const whatsappMsg = (msg: string) =>
    `https://wa.me/91${OWNER_PHONE}?text=${encodeURIComponent(msg)}`;

  const inputCls = 'w-full glass text-white placeholder-slate-400 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition-all duration-300';
  const labelCls = 'block text-sm font-semibold text-slate-300 mb-2';

  return (
    <section id="contact" className="section-padding relative">
      {/* Background Elements */}
      <div className="absolute top-20 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-1/4 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-cyan-400" />
            <span className="text-cyan-400 font-semibold text-sm tracking-widest uppercase">Get In Touch</span>
            <Sparkles className="w-5 h-5 text-cyan-400" />
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
            Let's Start Your <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Reach out directly to the owner. No middlemen, no brokerage. Your perfect home awaits.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            {/* Owner Info Card */}
            <div className="glass rounded-3xl p-8 shadow-2xl">
              <div className="flex items-center gap-6 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl flex items-center justify-center shadow-lg">
                  <User className="w-8 h-8 text-white" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-semibold uppercase tracking-widest">Property Owner</p>
                  <h3 className="text-2xl font-black text-white">{OWNER_NAME}</h3>
                  <p className="text-cyan-300 text-base font-semibold">DS Prime Homes</p>
                </div>
              </div>

              <div className="space-y-4">
                <a
                  href={`tel:+91${OWNER_PHONE}`}
                  className="flex items-center gap-4 p-4 glass rounded-2xl hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-2xl flex items-center justify-center group-hover:bg-cyan-500/30 transition-colors">
                    <Phone className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 font-medium">Direct Call</p>
                    <p className="text-lg font-bold text-white">+91 {OWNER_PHONE}</p>
                  </div>
                </a>

                <a
                  href={whatsappMsg('Hi Priyanshu Ji, I am interested in renting a flat at DS Prime Homes, Ormanjhi. Please share details.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 glass rounded-2xl hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-green-500/20 rounded-2xl flex items-center justify-center group-hover:bg-green-500/30 transition-colors">
                    <MessageCircle className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 font-medium">WhatsApp</p>
                    <p className="text-lg font-bold text-white">Quick Chat</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Site Visit Card */}
            <div className="glass rounded-3xl p-8 shadow-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10">
              <div className="flex items-center gap-3 mb-4">
                <Heart className="w-6 h-6 text-red-400" />
                <h3 className="font-bold text-white text-xl">Book a Free Site Visit</h3>
              </div>
              <p className="text-slate-300 text-base mb-6 leading-relaxed">
                Visit in person and see your future home. We're available 7 days a week, 9 AM – 7 PM.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`tel:+91${OWNER_PHONE}`}
                  className="flex-1 btn-gradient py-4 text-base font-bold shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Call to Book
                </a>
                <a
                  href={whatsappMsg('Hi, I want to book a site visit for a flat at DS Prime Homes, Ormanjhi.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 text-white font-bold py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/25 flex items-center justify-center gap-2"
                >
                  <Calendar className="w-5 h-5" />
                  WhatsApp Book
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass rounded-3xl p-8 shadow-2xl">
            <h3 className="font-bold text-white text-2xl mb-6 flex items-center gap-3">
              <Mail className="w-6 h-6 text-cyan-400" />
              Send a Message
            </h3>

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mb-6 shadow-lg">
                  <CheckCircle className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-white font-bold text-2xl mb-2">Message Received!</h4>
                <p className="text-slate-300 text-base leading-relaxed">
                  {OWNER_NAME} will contact you shortly on your phone number.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', phone: '', message: '' }); }}
                  className="mt-6 btn-gradient px-6 py-3 text-sm font-semibold"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className={labelCls}>Your Name</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    required
                    placeholder="Enter your full name"
                    className={inputCls}
                  />
                </div>
                <div>
                  <label className={labelCls}>Phone Number</label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                    required
                    placeholder="+91 XXXXX XXXXX"
                    className={inputCls}
                  />
                </div>
                <div>
                  <label className={labelCls}>Message</label>
                  <textarea
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    required
                    rows={5}
                    placeholder="I'm interested in a 2BHK flat. Please share availability and visit schedule..."
                    className={`${inputCls} resize-none`}
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full btn-gradient py-4 text-lg font-bold shadow-lg hover:shadow-cyan-500/25 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <Send className="w-5 h-5" />
                  )}
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
