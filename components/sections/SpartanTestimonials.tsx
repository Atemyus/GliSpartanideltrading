'use client'

import { motion } from 'framer-motion'
import { Star, Quote, Crown, TrendingUp, Award } from 'lucide-react'

const testimonials = [
  {
    name: "Marco Rossi",
    role: "Ex Goldman Sachs Trader",
    avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "In 15 anni di trading non ho mai visto un algoritmo così preciso. Fury Of Sparta ha superato le mie aspettative più ottimistiche. È come avere un team di analisti quantitativi che lavora 24/7.",
    profit: "+€127,450",
    timeframe: "6 mesi",
    verified: true
  },
  {
    name: "Dr. Giulia Santoro",
    role: "Quantitative Analyst",
    avatar: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "La matematica dietro questo bot è impressionante. Ho analizzato personalmente gli algoritmi e posso confermare che rappresentano lo stato dell'arte nel trading algoritmico.",
    profit: "+€89,230",
    timeframe: "4 mesi",
    verified: true
  },
  {
    name: "Alessandro Bianchi",
    role: "CEO Tech Startup",
    avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "Finalmente posso concentrarmi sul mio business mentre Fury Of Sparta gestisce i miei investimenti. ROI costante e stress zero. Un investimento che si ripaga da solo.",
    profit: "+€156,780",
    timeframe: "8 mesi",
    verified: true
  }
]

export default function SpartanTestimonials() {
  return (
    <section className="section-padding bg-gradient-to-b from-spartan-black via-spartan-stone/10 to-spartan-black relative overflow-hidden">
      {/* Premium Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-spartan-gold/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-spartan-red/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
      </div>

      <div className="container-luxury relative z-10">
        {/* Premium Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 glass-effect px-6 py-3 rounded-full mb-8 border border-spartan-gold/30"
          >
            <Crown className="w-5 h-5 text-spartan-gold" />
            <span className="text-spartan-gold font-semibold tracking-wide uppercase">
              Testimonianze Verificate
            </span>
          </motion.div>
          
          <h2 className="luxury-heading mb-8">
            <span className="block">Storie di</span>
            <span className="block text-gradient">Successo</span>
            <span className="block">Reali</span>
          </h2>
          
          <p className="text-2xl premium-text max-w-4xl mx-auto leading-relaxed">
            Professionisti che hanno trasformato i loro portafogli con la potenza spartana
          </p>
        </motion.div>

        {/* Premium Testimonials Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative floating-card"
            >
              {/* Premium testimonial card */}
              <div className="professional-card h-full relative overflow-hidden">
                {/* Quote decoration */}
                <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                  <Quote className="w-16 h-16 text-spartan-gold" />
                </div>
                
                {/* Rating stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Star className="w-6 h-6 fill-spartan-gold text-spartan-gold" />
                    </motion.div>
                  ))}
                </div>
                
                {/* Testimonial text */}
                <blockquote className="premium-text text-lg mb-8 leading-relaxed italic relative z-10">
                  "{testimonial.text}"
                </blockquote>
                
                {/* Profit highlight */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-400 px-6 py-3 rounded-2xl text-lg font-bold mb-6 border border-green-500/30"
                >
                  <TrendingUp className="w-5 h-5" />
                  <span>{testimonial.profit}</span>
                  <span className="text-sm text-green-400/70">in {testimonial.timeframe}</span>
                </motion.div>
                
                {/* Author info */}
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-2xl object-cover border-2 border-spartan-gold/30"
                    />
                    {testimonial.verified && (
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center border-2 border-black">
                        <Award className="w-3 h-3 text-white" />
                      </div>
                    )}
                  </div>
                  <div>
                    <div className="font-bold text-white text-lg">{testimonial.name}</div>
                    <div className="text-spartan-gold/80 font-medium">{testimonial.role}</div>
                    {testimonial.verified && (
                      <div className="text-xs text-green-400 font-medium mt-1">
                        ✓ Profitti Verificati
                      </div>
                    )}
                  </div>
                </div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-spartan-gold/0 via-spartan-gold/5 to-spartan-gold/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Premium CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="glass-effect rounded-2xl p-8 border border-white/10 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Vuoi essere il prossimo caso di successo?
            </h3>
            <p className="premium-text mb-6">
              Unisciti all'élite dei trader che hanno scelto l'eccellenza spartana
            </p>
            <motion.button 
              className="btn-luxury text-lg px-8 py-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Crown className="w-5 h-5 mr-2" />
              INIZIA IL TUO SUCCESSO
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}