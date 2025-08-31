'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'

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
    { label: 'Il Bot', href: '/bot' },
    { label: 'Funzionalità', href: '/features' },
    { label: 'Prezzi', href: '/pricing' },
    { label: 'Risultati', href: '/results' },
    { label: 'Contatti', href: '/contact' }
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-black/90 backdrop-blur-xl py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="gradient-gold w-12 h-12 rounded-lg flex items-center justify-center">
              <span className="text-black font-bold text-xl">S</span>
            </div>
            <div>
              <span className="text-white font-bold text-xl">SPARTANI</span>
              <span className="text-gradient-gold font-bold text-xl ml-2">TRADING</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="px-4 py-2 text-white/80 hover:text-white font-medium transition-colors duration-200 hover:bg-white/10 rounded-lg"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Buttons Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="btn-secondary">
              Accedi
            </button>
            <button className="btn-primary">
              Inizia Ora →
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:hidden mt-4 bg-black/95 backdrop-blur-xl rounded-2xl p-6"
          >
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block py-3 text-white/80 hover:text-white font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-6 space-y-3">
              <button className="btn-secondary w-full">
                Accedi
              </button>
              <button className="btn-primary w-full">
                Inizia Ora →
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}