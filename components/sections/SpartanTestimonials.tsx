'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: "Marco R.",
    role: "Trader da 5 anni",
    avatar: "MR",
    rating: 5,
    text: "Come un vero spartano, Fury Of Sparta non ha mai abbandonato la posizione. In 6 mesi ha trasformato il mio account da campo di battaglia in fortezza profittevole.",
    profit: "+127%"
  },
  {
    name: "Giulia S.",
    role: "Ex Analista Finanziaria",
    avatar: "GS",
    rating: 5,
    text: "La disciplina di questo bot è impressionante. Segue la strategia senza emozioni, proprio come farebbe un guerriero spartano.",
    profit: "+89%"
  },
  {
    name: "Alessandro M.",
    role: "Imprenditore",
    avatar: "AM",
    rating: 5,
    text: "Finalmente posso dormire tranquillo sapendo che il mio guerriero digitale veglia sui miei investimenti 24/7.",
    profit: "+156%"
  }
]

export default function SpartanTestimonials() {
  return (
    <section className="py-20 bg-gradient-to-b from-spartan-black to-spartan-stone/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-spartan text-5xl text-spartan-gold mb-4">
            I VETERANI PARLANO
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Storie di vittoria dai campi di battaglia del trading
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className="glass-effect rounded-xl p-6 h-full hover:border-spartan-gold/50 transition-all duration-300">
                {/* Quote icon */}
                <Quote className="w-8 h-8 text-spartan-gold/20 mb-4" />
                
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-spartan-gold text-spartan-gold" />
                  ))}
                </div>
                
                {/* Testimonial text */}
                <p className="text-gray-300 mb-6 italic">
                  "{testimonial.text}"
                </p>
                
                {/* Profit badge */}
                <div className="inline-block bg-green-500/20 text-green-500 px-3 py-1 rounded-full text-sm font-bold mb-4">
                  {testimonial.profit} in 6 mesi
                </div>
                
                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-spartan-gold/20 flex items-center justify-center text-spartan-gold font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}