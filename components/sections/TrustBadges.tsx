'use client'

import { motion } from 'framer-motion'
import { Shield, Award, Lock, Zap } from 'lucide-react'

const badges = [
  {
    icon: Shield,
    label: "Sicurezza SSL",
    description: "Crittografia militare"
  },
  {
    icon: Award,
    label: "Bot Certificato",
    description: "Testato e verificato"
  },
  {
    icon: Lock,
    label: "Privacy Garantita",
    description: "I tuoi dati sono protetti"
  },
  {
    icon: Zap,
    label: "Performance",
    description: "Esecuzione ultraveloce"
  }
]

export default function TrustBadges() {
  return (
    <section className="py-8 bg-spartan-black/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {badges.map((badge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <badge.icon className="w-8 h-8 text-spartan-gold mb-2" />
              <div className="text-sm font-bold text-white">{badge.label}</div>
              <div className="text-xs text-gray-500">{badge.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}