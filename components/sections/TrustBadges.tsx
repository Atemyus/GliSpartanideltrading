'use client'

import { motion } from 'framer-motion'
import { Shield, Award, Lock, Zap, Crown, CheckCircle, Star, Globe } from 'lucide-react'

const badges = [
  {
    icon: Shield,
    label: "Sicurezza Bancaria",
    description: "Crittografia AES-256",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Award,
    label: "Certificato TradingView",
    description: "Verificato e approvato",
    color: "from-spartan-gold to-yellow-400"
  },
  {
    icon: CheckCircle,
    label: "GDPR Compliant",
    description: "Privacy garantita",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Crown,
    label: "Premium Partner",
    description: "Broker certificati",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Star,
    label: "Rating 4.9/5",
    description: "Su 1000+ recensioni",
    color: "from-orange-500 to-red-500"
  },
  {
    icon: Globe,
    label: "Presenza Globale",
    description: "Server in 5 continenti",
    color: "from-indigo-500 to-blue-500"
  }
]

export default function TrustBadges() {
  return (
    <section className="py-16 bg-spartan-black/80 backdrop-blur-sm border-y border-white/5 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 hero-pattern opacity-5" />
      
      <div className="container-luxury relative z-10">
        {/* Premium header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl font-bold text-white mb-2">
            Certificazioni e Garanzie
          </h3>
          <p className="text-white/60">
            Standard di sicurezza e qualità di livello istituzionale
          </p>
        </motion.div>

        {/* Premium badges grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {badges.map((badge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                delay: index * 0.1, 
                duration: 0.5,
                type: "spring",
                stiffness: 100
              }}
              className="group relative"
            >
              {/* Premium badge card */}
              <div className="glass-effect rounded-2xl p-6 text-center hover:bg-white/5 transition-all duration-300 border border-white/10 hover:border-white/20 h-full flex flex-col justify-center">
                {/* Icon with gradient background */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${badge.color} shadow-luxury mb-4 mx-auto`}
                >
                  <badge.icon className="w-8 h-8 text-white" />
                </motion.div>
                
                {/* Content */}
                <h4 className="font-bold text-white text-lg mb-2 group-hover:text-gradient transition-all duration-300">
                  {badge.label}
                </h4>
                <p className="text-white/60 text-sm font-medium">
                  {badge.description}
                </p>

                {/* Hover glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${badge.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl blur-xl`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Premium trust statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="glass-effect rounded-2xl p-8 border border-spartan-gold/20 max-w-4xl mx-auto">
            <div className="flex flex-wrap justify-center items-center gap-8 text-sm">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-green-500" />
                <span className="text-white/80 font-medium">Fondi protetti fino a €100,000</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="w-5 h-5 text-blue-500" />
                <span className="text-white/80 font-medium">Conformità normative EU</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-spartan-gold" />
                <span className="text-white/80 font-medium">Audit indipendenti trimestrali</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}