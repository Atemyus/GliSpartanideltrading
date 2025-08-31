'use client'

import { motion } from 'framer-motion'
import CountUp from '../../components/ui/count-up'

const stats = [
  {
    value: 300,
    suffix: '+',
    label: 'Trader Attivi',
    color: 'text-gradient-gold'
  },
  {
    value: 87,
    suffix: '%',
    label: 'Win Rate',
    color: 'text-green-500'
  },
  {
    value: 15,
    suffix: '%',
    label: 'ROI Mensile',
    color: 'text-blue-500'
  },
  {
    value: 24,
    suffix: '/7',
    label: 'Supporto',
    color: 'text-purple-500'
  }
]

export default function StatsSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-black via-gray-900 to-black">
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className={`text-5xl lg:text-6xl font-bold ${stat.color} mb-2`}>
                <CountUp end={stat.value} />
                {stat.suffix}
              </div>
              <div className="text-gray-400 text-lg">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}