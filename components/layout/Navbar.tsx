'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, Shield, Sparkles } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Il Bot', href: '/fury-of-sparta' },
    { label: 'Funzionalità', href: '/features' },
    { label: 'Prezzi', href: '/pricing' },
    { label: 'Risultati', href: '/results' },
    { label: 'Contatti', href: '/contact' }
  ]

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-black/80 backdrop-blur-2xl py-4 shadow-luxury' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container-luxury">
        <div className="flex items-center justify-between">
          {/* Logo Premium */}
          <Link href="/" className="flex items-center space-x-4 group">
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-spartan-gold via-luxury-champagne to-spartan-bronze flex items-center justify-center shadow-glow-gold">
                <Shield className="w-8 h-8 text-black" />
              </div>
              <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-spartan-gold animate-pulse" />
            </motion.div>
            <div className="hidden sm:block">
              <div className="font-display text-2xl text-white group-hover:text-gradient transition-all duration-300">
                GLI SPARTANI
              </div>
              <div className="text-xs text-spartan-gold/80 -mt-1 tracking-[0.2em]">
                DEL TRADING
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="relative px-6 py-3 text-white/80 hover:text-white font-medium transition-all duration-300 rounded-xl hover:bg-white/5 group"
                >
                  <span className="relative z-10">{item.label}</span>
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-spartan-gold/0 via-spartan-gold/10 to-spartan-gold/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* CTA Buttons Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <motion.button 
              className="btn-outline-luxury"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Accedi
            </motion.button>
            <motion.button 
              className="btn-luxury"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Inizia Ora
              <motion.span
                className="ml-2 inline-block"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </motion.button>
          </div>

          {/* Mobile Menu Toggle */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative w-10 h-10 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all duration-300"
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={20} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={20} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="lg:hidden mt-6"
            >
              <div className="glass-effect rounded-2xl p-6 border border-white/10">
                <div className="space-y-2">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        className="block py-3 px-4 text-white/80 hover:text-white font-medium rounded-lg hover:bg-white/5 transition-all duration-300"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>
                
                <div className="mt-6 pt-6 border-t border-white/10 space-y-3">
                  <button className="btn-outline-luxury w-full justify-center">
                    Accedi
                  </button>
                  <button className="btn-luxury w-full justify-center">
                    Inizia Ora →
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}