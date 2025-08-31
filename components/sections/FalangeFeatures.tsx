'use client'

import { motion } from 'framer-motion'
import { Shield, Zap, Brain, Users, Lock, Cpu, Crown, Sparkles, Target, Rocket } from 'lucide-react'

const features = [
  {
    icon: Brain,
    title: "AI PREDITTIVA AVANZATA",
    description: "Reti neurali profonde analizzano 50+ indicatori tecnici e sentiment di mercato in tempo reale",
    gradient: "from-violet-500 via-purple-500 to-indigo-500",
    accent: "violet"
  },
  {
    icon: Zap,
    title: "ESECUZIONE FULMINEA",
    description: "Latenza ultra-bassa sotto i 5ms con server dedicati nelle principali borse mondiali",
    gradient: "from-yellow-400 via-orange-500 to-red-500",
    accent: "yellow"
  },
  {
    icon: Shield,
    title: "PROTEZIONE MILITARE",
    description: "Sistema di risk management a 7 livelli con protezione capitale garantita al 95%",
    gradient: "from-blue-500 via-cyan-500 to-teal-500",
    accent: "blue"
  },
  {
    icon: Target,
    title: "PRECISIONE CHIRURGICA",
    description: "Algoritmi proprietari con win rate del 89% su oltre 10.000 operazioni verificate",
    gradient: "from-green-500 via-emerald-500 to-teal-500",
    accent: "green"
  },
  {
    icon: Lock,
    title: "SICUREZZA BANCARIA",
    description: "Crittografia AES-256, autenticazione a 2 fattori e server in data center certificati",
    gradient: "from-red-500 via-pink-500 to-rose-500",
    accent: "red"
  },
  {
    icon: Crown,
    title: "SUPPORTO VIP 24/7",
    description: "Team di esperti certificati disponibile via chat, telefono e video-chiamata",
    gradient: "from-indigo-500 via-purple-500 to-pink-500",
    accent: "indigo"
  }
]

export default function FalangeFeatures() {
  return (
    <section className="section-padding bg-black relative overflow-hidden">
      {/* Premium Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 luxury-mesh" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-spartan-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-spartan-red/5 rounded-full blur-3xl" />
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
            <Sparkles className="w-5 h-5 text-spartan-gold animate-pulse" />
            <span className="text-spartan-gold font-semibold tracking-wide uppercase">
              Tecnologia Premium
            </span>
          </motion.div>
          
          <h2 className="luxury-heading mb-8">
            <span className="block">Arsenale</span>
            <span className="block text-gradient">Tecnologico</span>
            <span className="block">d'Élite</span>
          </h2>
          
          <p className="text-2xl premium-text max-w-4xl mx-auto leading-relaxed">
            Ogni componente è stato forgiato con precisione maniacale per garantire 
            prestazioni superiori e risultati eccezionali
          </p>
        </motion.div>

        {/* Premium Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative floating-card"
            >
              {/* Premium card glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-3xl opacity-0 group-hover:opacity-10 blur-xl transition-all duration-500`} />
              
              {/* Premium card content */}
              <div className="relative h-full professional-card border-white/10 group-hover:border-white/20">
                {/* Premium icon container */}
                <div className="mb-8">
                  <motion.div 
                    className={`inline-flex p-6 rounded-3xl bg-gradient-to-r ${feature.gradient} shadow-luxury relative overflow-hidden`}
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <feature.icon className="w-10 h-10 text-white relative z-10" />
                    <div className="absolute inset-0 bg-white/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.div>
                </div>
                
                {/* Premium title */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-gradient transition-all duration-300">
                  {feature.title}
                </h3>
                
                {/* Premium description */}
                <p className="premium-text text-lg leading-relaxed mb-6">
                  {feature.description}
                </p>
                
                {/* Premium hover indicator */}
                <motion.div 
                  className="flex items-center text-spartan-gold opacity-0 group-hover:opacity-100 transition-all duration-300"
                  initial={{ x: -10 }}
                  whileInView={{ x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <span className="font-semibold tracking-wide">Scopri di più</span>
                  <motion.div
                    animate={{ x: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="ml-3"
                  >
                    <Rocket className="w-5 h-5" />
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Premium bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <motion.button 
            className="btn-luxury text-xl px-12 py-6 shadow-glow-gold"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <Crown className="w-6 h-6 mr-3" />
            <span className="font-bold">ACCEDI ALL'ARSENALE COMPLETO</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}