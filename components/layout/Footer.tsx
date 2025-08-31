'use client'

import Link from 'next/link'
import { Shield, Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react'
import { motion } from 'framer-motion'

const footerLinks = {
  prodotti: [
    { name: 'Fury Of Sparta Bot', href: '/fury-of-sparta' },
    { name: 'Trading Academy', href: '/academy' },
    { name: 'Segnali Premium', href: '/signals' },
    { name: 'Coaching 1-to-1', href: '/coaching' }
  ],
  risorse: [
    { name: 'Blog', href: '/blog' },
    { name: 'Guide Gratuite', href: '/guides' },
    { name: 'Webinar', href: '/webinars' },
    { name: 'FAQ', href: '/faq' }
  ],
  azienda: [
    { name: 'Chi Siamo', href: '/about' },
    { name: 'Contatti', href: '/contact' },
    { name: 'Termini e Condizioni', href: '/terms' },
    { name: 'Privacy Policy', href: '/privacy' }
  ]
}

const socialLinks = [
  { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Youtube, href: 'https://youtube.com', label: 'YouTube' }
]

export default function Footer() {
  return (
    <footer className="bg-spartan-black border-t border-spartan-gold/20">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Shield className="w-10 h-10 text-spartan-gold" />
              <div>
                <h3 className="font-spartan text-2xl text-spartan-gold">
                  GLI SPARTANI
                </h3>
                <p className="text-xs text-gray-400 -mt-1">DEL TRADING</p>
              </div>
            </Link>
            
            <p className="text-gray-400 mb-6 max-w-sm">
              Forgiamo trader vincenti con la disciplina spartana e la tecnologia più avanzata.
              Unisciti alla legione.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-spartan-gold/10 flex items-center justify-center text-spartan-gold hover:bg-spartan-gold hover:text-spartan-black transition-all"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-spartan text-xl text-spartan-gold mb-4">PRODOTTI</h4>
            <ul className="space-y-2">
              {footerLinks.prodotti.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-spartan-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-spartan text-xl text-spartan-gold mb-4">RISORSE</h4>
            <ul className="space-y-2">
              {footerLinks.risorse.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-spartan-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-spartan text-xl text-spartan-gold mb-4">AZIENDA</h4>
            <ul className="space-y-2">
              {footerLinks.azienda.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-spartan-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 pt-8 border-t border-spartan-gold/20">
          <div className="flex items-center space-x-3">
            <Mail className="w-5 h-5 text-spartan-gold" />
            <div>
              <p className="text-xs text-gray-500">Email</p>
              <a href="mailto:info@glispartanideltrading.com" className="text-gray-300 hover:text-spartan-gold">
                info@glispartanideltrading.com
              </a>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <Phone className="w-5 h-5 text-spartan-gold" />
            <div>
              <p className="text-xs text-gray-500">Telefono</p>
              <a href="tel:+390123456789" className="text-gray-300 hover:text-spartan-gold">
                +39 012 345 6789
              </a>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <MapPin className="w-5 h-5 text-spartan-gold" />
            <div>
              <p className="text-xs text-gray-500">Sede</p>
              <p className="text-gray-300">Milano, Italia</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-spartan-stone/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p>© 2024 Gli Spartani del Trading. Tutti i diritti riservati.</p>
            <p className="mt-2 md:mt-0">
              Trading comporta rischi. Investi responsabilmente.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}