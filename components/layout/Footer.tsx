'use client'

import Link from 'next/link'
import { Shield, Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin, Youtube, Crown, Award, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

const footerLinks = {
  prodotti: [
    { name: 'Fury Of Sparta Bot', href: '/fury-of-sparta' },
    { name: 'Trading Academy VIP', href: '/academy' },
    { name: 'Segnali Premium', href: '/signals' },
    { name: 'Coaching Esclusivo', href: '/coaching' }
  ],
  risorse: [
    { name: 'Blog Insights', href: '/blog' },
    { name: 'Guide Masterclass', href: '/guides' },
    { name: 'Webinar Esclusivi', href: '/webinars' },
    { name: 'Centro Assistenza', href: '/faq' }
  ],
  azienda: [
    { name: 'La Nostra Storia', href: '/about' },
    { name: 'Contatti VIP', href: '/contact' },
    { name: 'Termini di Servizio', href: '/terms' },
    { name: 'Privacy & Sicurezza', href: '/privacy' }
  ]
}

const socialLinks = [
  { icon: Facebook, href: 'https://facebook.com', label: 'Facebook', color: 'hover:text-blue-500' },
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram', color: 'hover:text-pink-500' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter', color: 'hover:text-sky-500' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn', color: 'hover:text-blue-600' },
  { icon: Youtube, href: 'https://youtube.com', label: 'YouTube', color: 'hover:text-red-500' }
]

export default function Footer() {
  return (
    <footer className="bg-spartan-black border-t border-white/10 relative overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-spartan-black to-spartan-black" />
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-spartan-gold/5 rounded-full blur-3xl" />
      </div>

      {/* Main Footer */}
      <div className="container-luxury py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          
          {/* Premium Brand Column */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Link href="/" className="flex items-center space-x-4 mb-8 group">
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-spartan-gold via-luxury-champagne to-spartan-bronze flex items-center justify-center shadow-glow-gold">
                    <Shield className="w-10 h-10 text-black" />
                  </div>
                  <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-spartan-gold animate-pulse" />
                </div>
                <div>
                  <h3 className="font-display text-3xl text-gradient group-hover:scale-105 transition-transform duration-300">
                    GLI SPARTANI
                  </h3>
                  <p className="text-sm text-spartan-gold/80 -mt-1 tracking-[0.3em]">
                    DEL TRADING
                  </p>
                </div>
              </Link>
              
              <p className="premium-text text-lg mb-8 max-w-md leading-relaxed">
                Forgiamo trader d'élite combinando la disciplina spartana con 
                l'intelligenza artificiale più avanzata del settore finanziario.
              </p>

              {/* Premium certifications */}
              <div className="flex flex-wrap gap-4 mb-8">
                {[
                  { icon: Award, text: 'Certificato ISO' },
                  { icon: Shield, text: 'GDPR Compliant' },
                  { icon: Crown, text: 'Premium Partner' }
                ].map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-2 glass-effect px-4 py-2 rounded-full border border-white/10"
                  >
                    <cert.icon className="w-4 h-4 text-spartan-gold" />
                    <span className="text-xs text-white/80 font-medium">{cert.text}</span>
                  </motion.div>
                ))}
              </div>

              {/* Premium Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 rounded-2xl glass-effect flex items-center justify-center text-white/60 ${social.color} transition-all duration-300 border border-white/10 hover:border-white/30 hover:shadow-luxury`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                    aria-label={social.label}
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Premium Links Columns */}
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + categoryIndex * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h4 className="font-display text-2xl text-spartan-gold mb-8 uppercase tracking-wide">
                {category}
              </h4>
              <ul className="space-y-4">
                {links.map((link, linkIndex) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + linkIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Link
                      href={link.href}
                      className="text-white/70 hover:text-spartan-gold transition-all duration-300 font-medium text-lg hover:translate-x-2 inline-block"
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Premium Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-white/10"
        >
          {[
            {
              icon: Mail,
              label: "Email VIP",
              value: "elite@glispartanideltrading.com",
              href: "mailto:elite@glispartanideltrading.com"
            },
            {
              icon: Phone,
              label: "Hotline Esclusiva",
              value: "+39 02 8888 9999",
              href: "tel:+390288889999"
            },
            {
              icon: MapPin,
              label: "Quartier Generale",
              value: "Milano Financial District",
              href: null
            }
          ].map((contact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center space-x-4 group"
            >
              <div className="w-14 h-14 rounded-2xl glass-effect flex items-center justify-center border border-white/10 group-hover:border-spartan-gold/30 transition-all duration-300">
                <contact.icon className="w-7 h-7 text-spartan-gold group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div>
                <p className="text-sm text-white/60 font-medium mb-1">{contact.label}</p>
                {contact.href ? (
                  <a 
                    href={contact.href} 
                    className="text-white hover:text-spartan-gold transition-colors duration-300 font-semibold text-lg"
                  >
                    {contact.value}
                  </a>
                ) : (
                  <p className="text-white font-semibold text-lg">{contact.value}</p>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Premium Bottom Bar */}
      <div className="bg-black/50 backdrop-blur-sm border-t border-white/5">
        <div className="container-luxury py-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-center text-white/60"
          >
            <div className="flex items-center gap-4 mb-4 md:mb-0">
              <p className="font-medium">
                © 2024 Gli Spartani del Trading. Tutti i diritti riservati.
              </p>
              <div className="flex items-center gap-2">
                <Crown className="w-4 h-4 text-spartan-gold" />
                <span className="text-spartan-gold text-sm font-bold">PREMIUM</span>
              </div>
            </div>
            <div className="flex items-center gap-6 text-sm">
              <p className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-green-500" />
                Trading comporta rischi. Investi responsabilmente.
              </p>
              <p className="text-spartan-gold font-medium">
                Licenza CONSOB #12345
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}