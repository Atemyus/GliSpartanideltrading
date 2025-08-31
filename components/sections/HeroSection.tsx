'use client'

import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, TrendingUp, Users, Shield, Sparkles, Crown, Zap } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0 hero-pattern" />
        
        {/* Floating orbs */}
        <motion.div
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-20 w-96 h-96 bg-spartan-gold/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 0.8, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 left-20 w-80 h-80 bg-spartan-red/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container-luxury relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[85vh]">
          
          {/* Left Column - Hero Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Premium Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="inline-flex items-center gap-3 glass-effect px-6 py-3 rounded-full border border-spartan-gold/30"
            >
              <div className="relative">
                <Crown className="w-5 h-5 text-spartan-gold" />
                <Sparkles className="absolute -top-1 -right-1 w-3 h-3 text-spartan-gold animate-pulse" />
              </div>
              <span className="text-spartan-gold font-semibold tracking-wide">
                #1 Trading Bot in Italia
              </span>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            </motion.div>

            {/* Hero Title */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <h1 className="luxury-heading leading-[0.9] mb-6">
                <span className="block">Domina i</span>
                <span className="block text-gradient">Mercati</span>
                <span className="block">con Precisione</span>
                <span className="block text-gradient">Spartana</span>
              </h1>
            </motion.div>

            {/* Premium Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="text-2xl premium-text max-w-2xl leading-relaxed"
            >
              L'intelligenza artificiale più avanzata incontra la disciplina spartana. 
              <span className="text-spartan-gold font-semibold"> Fury Of Sparta</span> è il bot 
              che trasforma ogni trader in un guerriero dei mercati finanziari.
            </motion.p>

            {/* Premium Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="space-y-4"
            >
              {[
                { icon: TrendingUp, text: 'ROI medio del 18-25% mensile verificato', color: 'text-green-400' },
                { icon: Shield, text: 'Risk management militare con stop loss dinamici', color: 'text-blue-400' },
                { icon: Zap, text: 'Esecuzione ultraveloce sotto i 5ms', color: 'text-yellow-400' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center border border-white/10 group-hover:border-spartan-gold/30 transition-all duration-300">
                    <item.icon className={`w-6 h-6 ${item.color} group-hover:scale-110 transition-transform duration-300`} />
                  </div>
                  <span className="premium-text text-lg group-hover:text-white transition-colors duration-300">
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Premium CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.6 }}
              className="flex flex-wrap gap-6 pt-4"
            >
              <motion.button 
                className="btn-luxury text-lg px-10 py-5 flex items-center gap-3 shadow-glow-gold"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Shield className="w-6 h-6" />
                <span className="font-bold">INIZIA LA CONQUISTA</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              
              <motion.button 
                className="btn-outline-luxury text-lg px-10 py-5 flex items-center gap-3"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="font-semibold">GUARDA DEMO</span>
              </motion.button>
            </motion.div>

            {/* Social Proof Premium */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.6 }}
              className="flex items-center gap-8 pt-8"
            >
              <div className="flex -space-x-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.5 + i * 0.1 }}
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-spartan-gold to-spartan-bronze border-3 border-black shadow-luxury"
                    style={{
                      backgroundImage: `url('https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face')`
                    }}
                  />
                ))}
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-spartan-gold/20 to-spartan-bronze/20 border-3 border-black flex items-center justify-center backdrop-blur-sm">
                  <span className="text-spartan-gold font-bold text-sm">+300</span>
                </div>
              </div>
              <div>
                <div className="text-sm text-white/60 font-medium">Unisciti a</div>
                <div className="text-white font-bold text-lg">300+ trader di élite</div>
                <div className="flex items-center gap-1 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.8 + i * 0.1 }}
                      className="w-4 h-4 text-spartan-gold"
                    >
                      ★
                    </motion.div>
                  ))}
                  <span className="text-sm text-white/60 ml-2">4.9/5</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Premium Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: 15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative perspective-1000"
          >
            {/* Main Dashboard Card */}
            <div className="relative">
              {/* Glow effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-spartan-gold/20 via-transparent to-spartan-red/20 blur-3xl animate-pulse" />
              
              {/* Premium Trading Interface */}
              <motion.div 
                className="relative glass-effect rounded-3xl border border-white/20 p-8 shadow-luxury"
                whileHover={{ y: -5, rotateX: 5 }}
                transition={{ duration: 0.3 }}
              >
                {/* Header with live indicator */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse shadow-glow-gold" />
                    <span className="text-white font-bold text-lg">FURY OF SPARTA</span>
                    <div className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-bold">
                      LIVE
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-green-400">+€2,847</div>
                    <div className="text-sm text-white/60">Oggi</div>
                  </div>
                </div>

                {/* Premium Chart */}
                <div className="h-80 bg-gradient-to-b from-spartan-gold/5 to-transparent rounded-2xl mb-8 relative overflow-hidden border border-white/5">
                  <svg className="absolute inset-0 w-full h-full">
                    <defs>
                      <linearGradient id="chartGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#10b981" />
                        <stop offset="50%" stopColor="#D4AF37" />
                        <stop offset="100%" stopColor="#fbbf24" />
                      </linearGradient>
                      <filter id="glow">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                        <feMerge> 
                          <feMergeNode in="coloredBlur"/>
                          <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                      </filter>
                    </defs>
                    <motion.path
                      d="M 0 200 Q 100 150, 200 120 T 400 80 T 600 60"
                      stroke="url(#chartGradient)"
                      strokeWidth="4"
                      fill="none"
                      filter="url(#glow)"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 3, ease: "easeInOut" }}
                    />
                  </svg>
                  
                  {/* Floating profit indicators */}
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute top-4 right-4 bg-green-500/20 backdrop-blur-sm text-green-400 px-4 py-2 rounded-full text-sm font-bold border border-green-500/30"
                  >
                    +24.8% ROI
                  </motion.div>
                </div>

                {/* Premium Stats Grid */}
                <div className="grid grid-cols-3 gap-6">
                  {[
                    { icon: TrendingUp, label: 'Win Rate', value: '89%', color: 'text-green-400' },
                    { icon: Users, label: 'Trader Attivi', value: '347', color: 'text-spartan-gold' },
                    { icon: Shield, label: 'Sicurezza', value: '100%', color: 'text-blue-400' }
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.5 + index * 0.2 }}
                      className="text-center glass-effect rounded-xl p-4 hover:bg-white/5 transition-all duration-300"
                    >
                      <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-3 icon-glow`} />
                      <div className={`text-2xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
                      <div className="text-xs text-white/60 font-medium">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Floating badges */}
              <motion.div
                animate={{ 
                  y: [0, -15, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-6 -right-6 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-2xl text-sm font-bold shadow-luxury border border-white/20"
              >
                🔥 LIVE TRADING
              </motion.div>

              <motion.div
                animate={{ 
                  y: [0, 10, 0],
                  rotate: [0, -3, 0]
                }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-4 -left-4 bg-gradient-to-r from-spartan-gold to-spartan-bronze text-black px-6 py-3 rounded-2xl text-sm font-bold shadow-luxury"
              >
                ⚡ AI POWERED
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
          >
            <div className="w-1 h-3 bg-spartan-gold rounded-full mt-2" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}