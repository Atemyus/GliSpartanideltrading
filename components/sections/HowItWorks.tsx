'use client'

import { motion } from 'framer-motion'
import { UserPlus, Settings, TrendingUp, Trophy, Crown, Sparkles, Shield, Zap } from 'lucide-react'

const steps = [
  {
    icon: UserPlus,
    number: "01",
    title: "ARRUOLAMENTO VIP",
    description: "Registrazione esclusiva con verifica identità. Setup guidato da esperti in meno di 3 minuti.",
    features: ["Onboarding personalizzato", "Account manager dedicato", "Configurazione ottimale"]
  },
  {
    icon: Settings,
    number: "02",
    title: "CALIBRAZIONE PRECISION",
    description: "Il nostro team configura il bot secondo il tuo profilo di rischio e obiettivi finanziari.",
    features: ["Analisi del portafoglio", "Strategia personalizzata", "Test in ambiente sicuro"]
  },
  {
    icon: TrendingUp,
    number: "03",
    title: "BATTAGLIA AUTOMATICA",
    description: "Fury Of Sparta entra in azione sui mercati globali con precisione chirurgica 24/7.",
    features: ["Trading multi-mercato", "Monitoraggio continuo", "Ottimizzazione dinamica"]
  },
  {
    icon: Trophy,
    number: "04",
    title: "GLORIA E PROFITTI",
    description: "Monitora i risultati in tempo reale e celebra le vittorie con la community d'élite.",
    features: ["Dashboard premium", "Report dettagliati", "Community esclusiva"]
  }
]

export default function HowItWorks() {
  return (
    <section className="section-padding bg-gradient-to-b from-spartan-black via-spartan-stone/5 to-spartan-black relative overflow-hidden">
      {/* Premium Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-spartan-gold/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-spartan-red/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container-luxury relative z-10">
        {/* Premium Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-3 glass-effect px-8 py-4 rounded-full mb-8 border border-spartan-gold/30"
          >
            <Crown className="w-6 h-6 text-spartan-gold" />
            <span className="text-spartan-gold font-bold text-lg tracking-wide uppercase">
              Processo Esclusivo
            </span>
            <Sparkles className="w-5 h-5 text-spartan-gold animate-pulse" />
          </motion.div>
          
          <h2 className="luxury-heading mb-8">
            <span className="block">Il Percorso</span>
            <span className="block text-gradient">dell'Élite</span>
          </h2>
          
          <p className="text-2xl premium-text max-w-4xl mx-auto leading-relaxed">
            Quattro fasi studiate per trasformarti in un trader spartano d'élite
          </p>
        </motion.div>

        {/* Premium Steps */}
        <div className="relative">
          {/* Connection line for desktop */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-spartan-gold/20 via-spartan-gold/40 to-spartan-gold/20 hidden lg:block rounded-full" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="relative group"
              >
                {/* Premium step card */}
                <div className="professional-card relative overflow-hidden hover:border-white/20 h-full">
                  {/* Step number with premium styling */}
                  <div className="absolute -top-4 -left-4 w-16 h-16 rounded-2xl bg-gradient-to-br from-spartan-gold to-spartan-bronze flex items-center justify-center font-display text-2xl font-bold text-black shadow-luxury border-4 border-black">
                    {step.number}
                  </div>
                  
                  {/* Premium icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="w-20 h-20 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center mb-8 mx-auto border border-white/10 group-hover:border-spartan-gold/30 transition-all duration-300"
                  >
                    <step.icon className="w-10 h-10 text-spartan-gold icon-glow" />
                  </motion.div>
                  
                  {/* Content */}
                  <h3 className="font-display text-2xl text-spartan-gold mb-4 text-center group-hover:text-gradient transition-all duration-300">
                    {step.title}
                  </h3>
                  
                  <p className="premium-text text-center mb-6 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Premium features list */}
                  <div className="space-y-3">
                    {step.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + featureIndex * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <div className="w-2 h-2 bg-spartan-gold rounded-full" />
                        <span className="text-white/80 text-sm font-medium">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-spartan-gold/0 via-spartan-gold/5 to-spartan-gold/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                </div>

                {/* Connection dot for desktop */}
                <div className="absolute top-1/2 -translate-y-1/2 -right-4 w-8 h-8 bg-gradient-to-br from-spartan-gold to-spartan-bronze rounded-full border-4 border-black shadow-luxury hidden lg:block" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Premium bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="glass-effect rounded-3xl p-12 border border-white/10 max-w-3xl mx-auto">
            <Crown className="w-16 h-16 text-spartan-gold mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-white mb-4">
              Pronto per l'Élite?
            </h3>
            <p className="premium-text text-xl mb-8 leading-relaxed">
              Solo 50 posti disponibili questo mese per garantire un servizio esclusivo
            </p>
            <motion.button 
              className="btn-luxury text-xl px-12 py-6 shadow-glow-gold"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <Shield className="w-6 h-6 mr-3" />
              <span className="font-bold">RICHIEDI ACCESSO VIP</span>
            </motion.button>
            
            <div className="flex items-center justify-center gap-2 mt-6 text-sm text-white/60">
              <Zap className="w-4 h-4 text-green-500" />
              <span>Attivazione immediata • Garanzia 30 giorni</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}