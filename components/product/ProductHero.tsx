'use client'

import { motion } from 'framer-motion'
import { Download, PlayCircle, BarChart3, Award, Shield, Users, Crown, Sparkles, Zap, Target } from 'lucide-react'
import { Button } from '../ui/button'

export default function ProductHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Premium Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0 hero-pattern opacity-20" />
        
        {/* Animated orbs */}
        <motion.div
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-20 w-96 h-96 bg-spartan-gold/15 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 0.8, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 left-20 w-80 h-80 bg-spartan-red/15 rounded-full blur-3xl"
        />
      </div>

      <div className="container-luxury relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[85vh]">
          
          {/* Left Column - Premium Product Info */}
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
              className="inline-flex items-center gap-3 glass-effect px-8 py-4 rounded-full border border-spartan-gold/30"
            >
              <Crown className="w-6 h-6 text-spartan-gold" />
              <span className="text-spartan-gold font-bold text-lg tracking-wide">
                BOT PREMIUM #1 IN EUROPA
              </span>
              <Sparkles className="w-5 h-5 text-spartan-gold animate-pulse" />
            </motion.div>

            {/* Epic Title */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <h1 className="luxury-heading leading-[0.9] mb-6">
                <span className="block text-gradient">FURY OF</span>
                <span className="block text-white">SPARTA</span>
                <span className="block text-gradient text-6xl">BOT</span>
              </h1>
            </motion.div>

            {/* Premium Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="text-2xl premium-text leading-relaxed max-w-2xl"
            >
              Il guerriero digitale d'élite che combina <span className="text-spartan-gold font-bold">intelligenza artificiale avanzata</span> 
              con la disciplina spartana per dominare i mercati finanziari globali.
            </motion.p>

            {/* Premium Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="grid grid-cols-3 gap-6"
            >
              {[
                { icon: BarChart3, label: "ROI Medio", value: "23%/mese", color: "from-green-500 to-emerald-500" },
                { icon: Shield, label: "Protezione", value: "Garantita", color: "from-blue-500 to-cyan-500" },
                { icon: Target, label: "Win Rate", value: "89%", color: "from-spartan-gold to-yellow-400" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  className="professional-card text-center group hover:border-white/20"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`inline-flex p-3 rounded-2xl bg-gradient-to-r ${stat.color} shadow-luxury mb-3`}
                  >
                    <stat.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <div className="font-bold text-white text-lg mb-1">{stat.value}</div>
                  <div className="text-white/60 text-sm font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Premium CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="flex flex-wrap gap-6 pt-4"
            >
              <motion.button 
                className="btn-luxury text-xl px-12 py-6 shadow-glow-gold group"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="mr-3 group-hover:animate-bounce w-6 h-6" />
                <span className="font-bold">SCARICA FURY OF SPARTA</span>
              </motion.button>
              
              <motion.button 
                className="btn-outline-luxury text-xl px-12 py-6 group"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <PlayCircle className="mr-3 w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                <span className="font-bold">DEMO LIVE</span>
              </motion.button>
            </motion.div>

            {/* Premium guarantee */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.6 }}
              className="flex items-center justify-center gap-4 pt-8"
            >
              <div className="flex items-center gap-2 glass-effect px-4 py-2 rounded-full border border-green-500/30">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-green-400 font-semibold">Garanzia 30 giorni</span>
              </div>
              <div className="flex items-center gap-2 glass-effect px-4 py-2 rounded-full border border-blue-500/30">
                <Zap className="w-5 h-5 text-blue-500" />
                <span className="text-blue-400 font-semibold">Setup in 3 minuti</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Premium Product Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: 15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative perspective-1000"
          >
            {/* Main Product Showcase */}
            <div className="relative">
              {/* Premium glow effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-spartan-gold/20 via-transparent to-spartan-red/20 blur-3xl animate-pulse" />
              
              {/* Premium Trading Interface */}
              <motion.div 
                className="relative glass-effect rounded-3xl border border-white/20 p-10 shadow-luxury"
                whileHover={{ y: -8, rotateX: 5 }}
                transition={{ duration: 0.4, type: "spring" }}
              >
                {/* Premium header */}
                <div className="flex items-center justify-between mb-10">
                  <div className="flex items-center gap-4">
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                      className="w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full shadow-glow-gold"
                    />
                    <div>
                      <span className="text-white font-bold text-2xl">FURY OF SPARTA</span>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-bold">
                          LIVE TRADING
                        </div>
                        <div className="px-3 py-1 bg-spartan-gold/20 text-spartan-gold rounded-full text-xs font-bold">
                          AI ACTIVE
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-4xl font-bold text-green-400">+€4,127</div>
                    <div className="text-sm text-white/60 font-medium">Profitto Oggi</div>
                  </div>
                </div>

                {/* Premium Chart Visualization */}
                <div className="h-96 bg-gradient-to-b from-spartan-gold/10 via-transparent to-spartan-red/10 rounded-3xl mb-10 relative overflow-hidden border border-white/10">
                  <svg className="absolute inset-0 w-full h-full">
                    <defs>
                      <linearGradient id="premiumGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#10b981" />
                        <stop offset="25%" stopColor="#D4AF37" />
                        <stop offset="50%" stopColor="#fbbf24" />
                        <stop offset="75%" stopColor="#D4AF37" />
                        <stop offset="100%" stopColor="#10b981" />
                      </linearGradient>
                      <filter id="premiumGlow">
                        <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                        <feMerge> 
                          <feMergeNode in="coloredBlur"/>
                          <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                      </filter>
                    </defs>
                    <motion.path
                      d="M 0 250 Q 150 180, 300 150 T 600 100 T 900 80"
                      stroke="url(#premiumGradient)"
                      strokeWidth="5"
                      fill="none"
                      filter="url(#premiumGlow)"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 4, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
                    />
                  </svg>
                  
                  {/* Floating indicators */}
                  <motion.div
                    animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute top-6 right-6 glass-effect text-green-400 px-6 py-3 rounded-2xl text-lg font-bold border border-green-500/30"
                  >
                    +€2,847 oggi
                  </motion.div>

                  <motion.div
                    animate={{ y: [0, 12, 0], x: [0, -8, 0] }}
                    transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                    className="absolute bottom-6 left-6 glass-effect text-spartan-gold px-6 py-3 rounded-2xl text-lg font-bold border border-spartan-gold/30"
                  >
                    89% Win Rate
                  </motion.div>
                </div>

                {/* Premium Stats Dashboard */}
                <div className="grid grid-cols-3 gap-6">
                  {[
                    { icon: TrendingUp, label: 'Operazioni', value: '1,247', subtext: 'Questo mese', color: 'text-green-400' },
                    { icon: Users, label: 'Trader Attivi', value: '347', subtext: 'In tempo reale', color: 'text-spartan-gold' },
                    { icon: Shield, label: 'Sicurezza', value: '100%', subtext: 'Fondi protetti', color: 'text-blue-400' }
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.5 + index * 0.2 }}
                      className="text-center professional-card hover:border-white/20"
                    >
                      <stat.icon className={`w-10 h-10 ${stat.color} mx-auto mb-4 icon-glow`} />
                      <div className={`text-3xl font-bold ${stat.color} mb-2 font-display`}>{stat.value}</div>
                      <div className="text-white font-semibold mb-1">{stat.label}</div>
                      <div className="text-xs text-white/60 font-medium">{stat.subtext}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Premium floating badges */}
              <motion.div
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-8 -right-8 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-2xl font-bold shadow-luxury border border-white/20 text-lg"
              >
                🔥 LIVE TRADING
              </motion.div>

              <motion.div
                animate={{ 
                  y: [0, 15, 0],
                  rotate: [0, -3, 0]
                }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-6 -left-6 bg-gradient-to-r from-spartan-gold to-spartan-bronze text-black px-8 py-4 rounded-2xl font-bold shadow-luxury text-lg"
              >
                ⚡ AI POWERED
              </motion.div>

              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 10, 0]
                }}
                transition={{ duration: 6, repeat: Infinity, delay: 2 }}
                className="absolute top-1/2 -right-12 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-2xl font-bold shadow-luxury border border-white/20"
              >
                🏆 #1 BOT
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Premium scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-8 h-12 border-2 border-spartan-gold/50 rounded-full flex justify-center relative"
          >
            <motion.div 
              className="w-2 h-4 bg-spartan-gold rounded-full mt-2"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}