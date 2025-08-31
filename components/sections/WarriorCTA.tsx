'use client'

import { motion } from 'framer-motion'
import { Sword, ArrowRight, Shield, Users } from 'lucide-react'
import { Button } from '../ui/button'

export default function WarriorCTA() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Epic Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-spartan-red/20 via-spartan-black to-spartan-red/20" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="font-spartan text-5xl md:text-6xl text-white mb-6">
            UNISCITI ALLA
            <span className="text-gradient block">LEGIONE SPARTANA</span>
          </h2>

          <p className="text-xl text-gray-300 mb-8">
            300 guerrieri tennero testa a un impero. 
            Immagina cosa può fare un esercito di trader spartani nei mercati moderni.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" className="bg-spartan-red hover:bg-spartan-red/80 group">
                <Shield className="mr-2 group-hover:rotate-12 transition-transform" />
                <span className="font-bold">DIVENTA UNO SPARTANO</span>
              </Button>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" variant="outline" className="border-spartan-gold text-spartan-gold hover:bg-spartan-gold hover:text-black">
                <Sword className="mr-2" />
                <span className="font-bold">SCOPRI DI PIÙ</span>
              </Button>
            </motion.div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="glass-effect rounded-lg p-4">
              <Shield className="w-8 h-8 text-spartan-gold mb-2" />
              <h3 className="font-bold text-white mb-1">Protezione Garantita</h3>
              <p className="text-sm text-gray-400">Stop loss automatici e gestione del rischio</p>
            </div>
            
            <div className="glass-effect rounded-lg p-4">
              <Sword className="w-8 h-8 text-spartan-gold mb-2" />
              <h3 className="font-bold text-white mb-1">Armi Affilate</h3>
              <p className="text-sm text-gray-400">Algoritmi testati in battaglia</p>
            </div>
            
            <div className="glass-effect rounded-lg p-4">
              <Users className="w-8 h-8 text-spartan-gold mb-2" />
              <h3 className="font-bold text-white mb-1">Fratellanza</h3>
              <p className="text-sm text-gray-400">Community esclusiva e supporto 24/7</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}