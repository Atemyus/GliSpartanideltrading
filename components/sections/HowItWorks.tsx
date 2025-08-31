'use client'

import { motion } from 'framer-motion'
import { UserPlus, Settings, TrendingUp, Trophy } from 'lucide-react'

const steps = [
  {
    icon: UserPlus,
    number: "01",
    title: "L'ARRUOLAMENTO",
    description: "Registrati e scarica Fury Of Sparta. Setup guidato in meno di 5 minuti."
  },
  {
    icon: Settings,
    number: "02",
    title: "L'AGOGE",
    description: "Configura i parametri secondo il tuo stile. Il bot si adatta alla tua strategia."
  },
  {
    icon: TrendingUp,
    number: "03",
    title: "LA BATTAGLIA",
    description: "Attiva il bot e lascia che combatta per te 24/7 sui mercati globali."
  },
  {
    icon: Trophy,
    number: "04",
    title: "LA GLORIA",
    description: "Monitora i profitti e celebra le vittorie con la community spartana."
  }
]

export default function HowItWorks() {
  return (
    <section className="py-20 bg-spartan-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-spartan text-5xl text-spartan-gold mb-4">
            IL PERCORSO DEL GUERRIERO
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Quattro semplici passi per trasformarti in un trader spartano
          </p>
        </motion.div>

        <div className="relative">
          {/* Linea di connessione desktop */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-spartan-gold/20 hidden lg:block" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="glass-effect rounded-xl p-6 hover:border-spartan-gold/50 transition-all duration-300">
                  {/* Numero step */}
                  <div className="text-spartan-gold/30 font-spartan text-6xl mb-4">
                    {step.number}
                  </div>
                  
                  {/* Icona */}
                  <div className="w-16 h-16 rounded-full bg-spartan-gold/10 flex items-center justify-center mb-4 mx-auto lg:mx-0">
                    <step.icon className="w-8 h-8 text-spartan-gold" />
                  </div>
                  
                  {/* Contenuto */}
                  <h3 className="font-spartan text-xl text-spartan-gold mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}