'use client'

import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, TrendingUp, Users, Shield } from 'lucide-react'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background professionale */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="absolute top-20 right-20 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-red-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          
          {/* Colonna Sinistra - Contenuto */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full px-4 py-2"
            >
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-yellow-500 text-sm font-semibold">
                300+ Trader Attivi Online
              </span>
            </motion.div>

            {/* Titolo */}
            <div>
              <h1 className="text-5xl lg:text-7xl font-bold">
                <span className="text-white">Domina i</span>
                <br />
                <span className="text-gradient-gold">Mercati</span>
                <span className="text-white"> con</span>
                <br />
                <span className="text-white">Fury Of </span>
                <span className="text-gradient-gold">Sparta</span>
              </h1>
            </div>

            {/* Sottotitolo */}
            <p className="text-xl text-gray-300 leading-relaxed">
              Il bot di trading algoritmico che combina intelligenza artificiale 
              e strategia spartana per generare profitti consistenti 24/7.
            </p>

            {/* Punti chiave */}
            <div className="space-y-3">
              {[
                '✓ ROI medio del 15-20% mensile',
                '✓ Risk management automatizzato',
                '✓ Supporto 24/7 in italiano'
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="text-green-500 w-5 h-5" />
                  <span className="text-gray-300">{item.replace('✓ ', '')}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <button className="btn-primary text-lg px-8 py-4 flex items-center gap-2">
                Inizia Ora
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="btn-secondary text-lg px-8 py-4">
                Guarda Demo
              </button>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex items-center gap-8 pt-4"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 border-2 border-black"
                  />
                ))}
              </div>
              <div>
                <div className="text-sm text-gray-400">Unisciti a</div>
                <div className="text-white font-semibold">300+ trader di successo</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Colonna Destra - Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            {/* Card principale */}
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-red-500/20 blur-3xl" />
              
              {/* Trading Dashboard Mock */}
              <div className="relative bg-black/40 backdrop-blur-xl rounded-3xl border border-white/10 p-8">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-white font-semibold">Trading Attivo</span>
                  </div>
                  <span className="text-green-500 font-bold">+24.8%</span>
                </div>

                {/* Chart Mock */}
                <div className="h-64 bg-gradient-to-b from-green-500/20 to-transparent rounded-xl mb-6 relative overflow-hidden">
                  <svg className="absolute inset-0 w-full h-full">
                    <path
                      d="M 0 150 Q 100 100, 200 120 T 400 80"
                      stroke="url(#gradient)"
                      strokeWidth="3"
                      fill="none"
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#10b981" />
                        <stop offset="100%" stopColor="#fbbf24" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <TrendingUp className="w-6 h-6 text-green-500 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white">87%</div>
                    <div className="text-xs text-gray-400">Win Rate</div>
                  </div>
                  <div className="text-center">
                    <Users className="w-6 h-6 text-yellow-500 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white">300+</div>
                    <div className="text-xs text-gray-400">Utenti</div>
                  </div>
                  <div className="text-center">
                    <Shield className="w-6 h-6 text-blue-500 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white">100%</div>
                    <div className="text-xs text-gray-400">Sicuro</div>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-bold"
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