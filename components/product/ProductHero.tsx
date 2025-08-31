'use client'

import { motion } from 'framer-motion'
import { Download, PlayCircle, BarChart3, Award, Shield, Users } from 'lucide-react'
import { Button } from '../ui/button'
import Image from 'next/image'

export default function ProductHero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 hero-pattern opacity-5" />
      <div className="absolute inset-0 bg-gradient-to-b from-spartan-red/10 via-transparent to-spartan-black" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Product Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 glass-effect px-4 py-2 rounded-full mb-6">
              <Award className="w-4 h-4 text-spartan-gold" />
              <span className="text-sm text-spartan-gold">Bot #1 in Italia</span>
            </div>

            <h1 className="font-spartan text-5xl md:text-6xl text-white mb-6">
              FURY OF
              <span className="text-gradient block">SPARTA BOT</span>
            </h1>

            <p className="text-xl text-gray-300 mb-8">
              Il guerriero digitale che non conosce paura né fatica. 
              Programmato con la disciplina spartana per conquistare i mercati 24/7.
            </p>

            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="text-center glass-effect rounded-lg p-3">
                <BarChart3 className="w-6 h-6 text-spartan-gold mx-auto mb-1" />
                <div className="text-sm text-gray-400">ROI Medio</div>
                <div className="font-bold text-white">+15%/mese</div>
              </div>
              <div className="text-center glass-effect rounded-lg p-3">
                <Shield className="w-6 h-6 text-spartan-gold mx-auto mb-1" />
                <div className="text-sm text-gray-400">Protezione</div>
                <div className="font-bold text-white">Stop Loss</div>
              </div>
              <div className="text-center glass-effect rounded-lg p-3">
                <Users className="w-6 h-6 text-spartan-gold mx-auto mb-1" />
                <div className="text-sm text-gray-400">Supporto</div>
                <div className="font-bold text-white">24/7</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-spartan-red hover:bg-spartan-red/80 group">
                <Download className="mr-2 group-hover:animate-bounce" />
                SCARICA ORA
              </Button>
              <Button size="lg" variant="outline" className="border-spartan-gold text-spartan-gold">
                <PlayCircle className="mr-2" />
                GUARDA DEMO
              </Button>
            </div>
          </motion.div>

          {/* Right Column - Product Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative w-full h-[500px] glass-effect rounded-2xl p-8">
              {/* Trading Chart Mockup */}
              <div className="absolute inset-4 bg-gradient-to-br from-spartan-gold/20 to-spartan-red/20 rounded-xl">
                <div className="p-4">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-spartan-gold font-bold">EUR/USD</span>
                    <span className="text-green-500 text-sm">+2.34%</span>
                  </div>
                  {/* Animated chart lines */}
                  <svg className="w-full h-[300px]">
                    <motion.path
                      d="M 0 150 Q 100 100, 200 120 T 400 80"
                      stroke="url(#gradient)"
                      strokeWidth="3"
                      fill="none"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <defs>
                      <linearGradient id="gradient">
                        <stop offset="0%" stopColor="#DAA520" />
                        <stop offset="100%" stopColor="#8B0000" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
              
              {/* Floating badges */}
              <motion.div
                className="absolute -top-4 -right-4 bg-green-500 text-black px-4 py-2 rounded-full font-bold"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                LIVE
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}