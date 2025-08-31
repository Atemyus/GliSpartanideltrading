'use client'

import { motion } from 'framer-motion'
import CountUp from '../ui/count-up'
import { TrendingUp, Users, Shield, Zap, Crown, Award } from 'lucide-react'

const stats = [
  {
    icon: Users,
    value: 347,
    suffix: '+',
    label: 'Trader d\'Élite',
    sublabel: 'Community esclusiva',
    color: 'from-spartan-gold to-yellow-400',
    textColor: 'text-spartan-gold'
  },
  {
    icon: TrendingUp,
    value: 89,
    suffix: '%',
    label: 'Win Rate',
    sublabel: 'Su 10k+ operazioni',
    color: 'from-green-400 to-emerald-500',
    textColor: 'text-green-400'
  },
  {
    icon: Crown,
    value: 23,
    suffix: '%',
    label: 'ROI Mensile',
    sublabel: 'Media verificata',
    color: 'from-blue-400 to-cyan-500',
    textColor: 'text-blue-400'
  },
  {
    icon: Shield,
    value: 24,
    suffix: '/7',
    label: 'Supporto VIP',
    sublabel: 'Sempre disponibile',
    color: 'from-purple-400 to-pink-500',
    textColor: 'text-purple-400'
  }
]

export default function StatsSection() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-spartan-black to-black" />
        <div className="absolute inset-0 hero-pattern opacity-20" />
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
            <Award className="w-5 h-5 text-spartan-gold" />
            <span className="text-spartan-gold font-semibold tracking-wide uppercase">
              Risultati Verificati
            </span>
          </motion.div>
          
          <h2 className="font-display text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Numeri che</span>
            <span className="block text-gradient">Parlano Chiaro</span>
          </h2>
        </motion.div>

        {/* Premium Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                type: "spring",
                stiffness: 100
              }}
              className="group relative"
            >
              {/* Premium card with hover effects */}
              <div className="professional-card text-center relative overflow-hidden">
                {/* Background glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`} />
                
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${stat.color} shadow-luxury mb-6 relative`}
                >
                  <stat.icon className="w-8 h-8 text-white" />
                  <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>

                {/* Value */}
                <div className={`text-5xl lg:text-6xl font-bold ${stat.textColor} mb-2 font-display`}>
                  <CountUp end={stat.value} duration={2} />
                  <span className="text-4xl">{stat.suffix}</span>
                </div>

                {/* Label */}
                <div className="text-white font-bold text-xl mb-2">
                  {stat.label}
                </div>

                {/* Sublabel */}
                <div className="text-white/60 text-sm font-medium">
                  {stat.sublabel}
                </div>

                {/* Shimmer effect on hover */}
                <div className="absolute inset-0 shimmer-effect opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Premium Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="glass-effect rounded-2xl p-8 border border-white/10">
            <div className="flex flex-wrap justify-center items-center gap-8">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-white/80 font-medium">Server Operativi</span>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-blue-400" />
                <span className="text-white/80 font-medium">SSL Certificato</span>
              </div>
              <div className="flex items-center gap-3">
                <Award className="w-5 h-5 text-spartan-gold" />
                <span className="text-white/80 font-medium">Verificato da TradingView</span>
              </div>
              <div className="flex items-center gap-3">
                <Lock className="w-5 h-5 text-purple-400" />
                <span className="text-white/80 font-medium">GDPR Compliant</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}