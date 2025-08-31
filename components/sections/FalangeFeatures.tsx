'use client'

import { motion } from 'framer-motion'
import { Shield, Zap, Brain, Users, Lock, Cpu } from 'lucide-react'

const features = [
  {
    icon: Cpu,
    title: "AI PREDITTIVA",
    description: "Algoritmi di machine learning analizzano migliaia di pattern in tempo reale",
    gradient: "from-violet-500 to-purple-500"
  },
  {
    icon: Zap,
    title: "ESECUZIONE ULTRAVELOCE",
    description: "Latenza sotto i 10ms per cogliere ogni opportunità di mercato",
    gradient: "from-yellow-500 to-orange-500"
  },
  {
    icon: Shield,
    title: "RISK MANAGEMENT",
    description: "Sistema di protezione capitale con stop loss dinamici intelligenti",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: Brain,
    title: "ADAPTIVE LEARNING",
    description: "Il bot migliora continuamente analizzando i propri risultati",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    icon: Lock,
    title: "SICUREZZA MILITARE",
    description: "Crittografia end-to-end e server dedicati in Europa",
    gradient: "from-red-500 to-pink-500"
  },
  {
    icon: Users,
    title: "SUPPORTO 24/7",
    description: "Team di esperti sempre disponibile via chat, email e telefono",
    gradient: "from-indigo-500 to-blue-500"
  }
]

export default function FalangeFeatures() {
  return (
    <section className="py-32 bg-black relative overflow-hidden">
      {/* Background gradient mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(120,40,200,0.1)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(218,165,32,0.1)_0%,transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-block mb-4"
          >
            <span className="text-sm font-semibold text-spartan-gold uppercase tracking-wider bg-spartan-gold/10 px-4 py-2 rounded-full">
              Caratteristiche
            </span>
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
              Tecnologia che
            </span>
            <span className="block text-gradient">
              Ridefinisce il Trading
            </span>
          </h2>
          
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            Un ecosistema completo di strumenti professionali per dominare i mercati
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="group relative"
            >
              {/* Card glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-spartan-gold/0 via-spartan-gold/5 to-spartan-gold/0 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
              
              {/* Card content */}
              <div className="relative h-full bg-zinc-950/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-8 hover:border-zinc-700 transition-colors duration-300">
                {/* Icon with gradient background */}
                <div className="mb-6">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${feature.gradient} shadow-lg`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gradient transition-all duration-300">
                  {feature.title}
                </h3>
                
                {/* Description */}
                <p className="text-zinc-400 leading-relaxed">
                  {feature.description}
                </p>
                
                {/* Hover indicator */}
                <div className="mt-6 flex items-center text-spartan-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm font-medium">Scopri di più</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}