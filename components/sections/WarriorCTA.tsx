'use client'

import { motion } from 'framer-motion'
import { Sword, ArrowRight, Shield, Users, Crown, Sparkles, Zap, Target } from 'lucide-react'
import { Button } from '../ui/button'

export default function WarriorCTA() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Epic Premium Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-spartan-red/20 via-spartan-black to-spartan-gold/20" />
        <div className="absolute inset-0 hero-pattern opacity-30" />
        
        {/* Animated background elements */}
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-spartan-gold/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-spartan-red/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container-luxury relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-5xl mx-auto"
        >
          {/* Premium Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-3 glass-effect px-8 py-4 rounded-full mb-12 border border-spartan-gold/30"
          >
            <Crown className="w-6 h-6 text-spartan-gold" />
            <span className="text-spartan-gold font-bold text-lg tracking-wide uppercase">
              Accesso Esclusivo
            </span>
            <Sparkles className="w-5 h-5 text-spartan-gold animate-pulse" />
          </motion.div>

          {/* Epic Title */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="luxury-heading mb-8"
          >
            <span className="block">Entra nella</span>
            <span className="block text-gradient">Legione d'Élite</span>
            <span className="block">dei Trader Spartani</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-2xl premium-text mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            300 guerrieri tennero testa a un impero intero alle Termopili. 
            Oggi, <span className="text-spartan-gold font-bold">347 trader spartani</span> dominano 
            i mercati globali con tecnologia d'avanguardia.
          </motion.p>

          {/* Premium CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex flex-wrap gap-6 justify-center mb-16"
          >
            <motion.button 
              className="btn-luxury text-xl px-12 py-6 shadow-glow-gold relative overflow-hidden group"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex items-center gap-3 relative z-10">
                <Shield className="w-7 h-7 group-hover:rotate-12 transition-transform duration-300" />
                <span className="font-bold">DIVENTA UNO SPARTANO</span>
                <ArrowRight className="w-6 h-6" />
              </div>
            </motion.button>
            
            <motion.button 
              className="btn-outline-luxury text-xl px-12 py-6 group"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex items-center gap-3">
                <Sword className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                <span className="font-bold">SCOPRI L'ARSENALE</span>
              </div>
            </motion.button>
          </motion.div>

          {/* Premium Features Highlight */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: Shield,
                title: "Protezione Totale",
                description: "Risk management militare con garanzia capitale",
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                icon: Zap,
                title: "Tecnologia Superiore",
                description: "AI proprietaria testata su milioni di operazioni",
                gradient: "from-spartan-gold to-yellow-400"
              },
              {
                icon: Target,
                title: "Risultati Garantiti",
                description: "89% win rate verificato da enti terzi",
                gradient: "from-green-500 to-emerald-500"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="professional-card text-center hover:border-white/20">
                  {/* Premium icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${feature.gradient} shadow-luxury mb-6`}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gradient transition-all duration-300">
                    {feature.title}
                  </h3>
                  <p className="premium-text leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Final Premium Touch */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="glass-effect rounded-2xl p-6 border border-spartan-gold/20 inline-block">
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-white/80 font-medium">
                  <span className="text-spartan-gold font-bold">23 trader</span> si sono uniti oggi
                </span>
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}