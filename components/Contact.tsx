'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  const whatsappContact = () => {
    window.open('https://wa.me/971500000000?text=Hello%20Ayzal%20Perfume%2C%20I%27m%20interested%20in%20your%20luxury%20fragrances', '_blank');
  };

  return (
    <section ref={sectionRef} className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-black via-gold/5 to-transparent" />
      <div className="luxury-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="section-subtitle">CONNECT WITH US</span>
          <h2 className="section-title">Experience <span className="text-gold">Luxury</span> Firsthand</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mt-4">Visit our boutique or schedule a private consultation</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="glass-card p-8"
          >
            <h3 className="text-2xl font-serif text-gold mb-6">Send an Inquiry</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white/5 border border-gold/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all duration-300"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-white/5 border border-gold/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all duration-300"
                  required
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-white/5 border border-gold/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all duration-300"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-gold text-black font-sans text-sm tracking-wider hover:bg-gold-light transition-all duration-300 rounded-full transform hover:scale-[1.02]"
              >
                SEND MESSAGE
              </button>
              {submitted && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-gold text-center text-sm">
                  Thank you! We'll be in touch soon.
                </motion.p>
              )}
            </form>
          </motion.div>

          {/* Location & WhatsApp */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="space-y-6"
          >
            <div className="glass-card p-8">
              <h3 className="text-2xl font-serif text-gold mb-4">Boutique Location</h3>
              <div className="space-y-3 text-gray-300">
                <p className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>The Galleria Luxury Mall, Downtown Dubai, UAE</span>
                </p>
                <p className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>By appointment only — please inquire for a private consultation</span>
                </p>
              </div>
            </div>

            <div className="glass-card p-8 text-center">
              <h3 className="text-2xl font-serif text-gold mb-4">Connect via WhatsApp</h3>
              <p className="text-gray-300 mb-6">Experience personalized fragrance consultation</p>
              <button
                onClick={whatsappContact}
                className="px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white font-sans text-sm tracking-wider hover:from-green-500 hover:to-green-600 transition-all duration-300 rounded-full flex items-center justify-center gap-3 mx-auto transform hover:scale-105"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.414 3.488 2.245 2.248 3.482 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.306 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.668.149-.198.297-.768.967-.941 1.165-.174.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.019-.458.13-.606.133-.133.297-.347.446-.521.149-.174.198-.297.297-.496.099-.198.05-.372-.025-.521-.074-.149-.668-1.611-.916-2.206-.241-.58-.485-.502-.668-.512-.174-.01-.372-.01-.57-.01-.198 0-.52.074-.792.371-.272.297-1.04 1.016-1.04 2.478 0 1.462 1.064 2.874 1.213 3.073.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.174-1.413z"/>
                </svg>
                CHAT ON WHATSAPP
              </button>
            </div>

            {/* Newsletter */}
            <div className="glass-card p-8">
              <h3 className="text-2xl font-serif text-gold mb-4">Subscribe to Elegance</h3>
              <p className="text-gray-300 mb-4 text-sm">Receive exclusive previews, private collection releases, and invitation-only events.</p>
              <div className="flex gap-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 bg-white/5 border border-gold/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all duration-300"
                />
                <button className="px-6 py-3 bg-gold text-black text-sm tracking-wider hover:bg-gold-light transition-all duration-300 rounded-full whitespace-nowrap">
                  SUBSCRIBE
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}