'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Send, Loader2, Crown, Shield, Sparkles } from 'lucide-react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { useToast } from '../ui/use-toast'

const formSchema = z.object({
  name: z.string().min(2, 'Il nome deve avere almeno 2 caratteri'),
  email: z.string().email('Email non valida'),
  phone: z.string().optional(),
  message: z.string().min(10, 'Il messaggio deve avere almeno 10 caratteri'),
  interest: z.enum(['bot', 'academy', 'both', 'info'])
})

type FormData = z.infer<typeof formSchema>

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormData>({
    resolver: zodResolver(formSchema)
  })

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })

      if (response.ok) {
        toast({
          title: "Messaggio inviato con successo!",
          description: "Il nostro team VIP ti contatterà entro 24 ore, guerriero!",
        })
        reset()
      } else {
        throw new Error('Errore invio form')
      }
    } catch (error) {
      toast({
        title: "Errore",
        description: "Si è verificato un errore. Riprova o contattaci direttamente.",
        variant: "destructive"
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="relative">
      {/* Premium background */}
      <div className="absolute inset-0 bg-gradient-to-br from-spartan-gold/5 via-transparent to-spartan-red/5 rounded-3xl blur-xl" />
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        {/* Premium form header */}
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-3 glass-effect px-6 py-3 rounded-full mb-6 border border-spartan-gold/30"
          >
            <Crown className="w-5 h-5 text-spartan-gold" />
            <span className="text-spartan-gold font-bold tracking-wide uppercase">
              Contatto VIP
            </span>
            <Sparkles className="w-4 h-4 text-spartan-gold animate-pulse" />
          </motion.div>
          
          <h2 className="text-4xl font-bold text-white mb-4">
            Entra in Contatto con
            <span className="block text-gradient">l'Élite Spartana</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Il nostro team di esperti è pronto ad accoglierti nella legione
          </p>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          onSubmit={handleSubmit(onSubmit)}
          className="professional-card border border-white/20 hover:border-white/30 transition-all duration-500"
        >
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <label className="text-lg text-spartan-gold mb-3 block font-semibold">
                Nome Completo *
              </label>
              <Input
                {...register('name')}
                placeholder="Marcus Aurelius"
                className="bg-white/5 border-white/20 focus:border-spartan-gold text-white placeholder:text-white/40 h-14 text-lg rounded-xl"
              />
              {errors.name && (
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-red-400 text-sm mt-2 flex items-center gap-2"
                >
                  <Shield className="w-4 h-4" />
                  {errors.name.message}
                </motion.p>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <label className="text-lg text-spartan-gold mb-3 block font-semibold">
                Email *
              </label>
              <Input
                {...register('email')}
                type="email"
                placeholder="guerriero@sparta.com"
                className="bg-white/5 border-white/20 focus:border-spartan-gold text-white placeholder:text-white/40 h-14 text-lg rounded-xl"
              />
              {errors.email && (
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-red-400 text-sm mt-2 flex items-center gap-2"
                >
                  <Shield className="w-4 h-4" />
                  {errors.email.message}
                </motion.p>
              )}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mb-8"
          >
            <label className="text-lg text-spartan-gold mb-3 block font-semibold">
              Telefono (Opzionale)
            </label>
            <Input
              {...register('phone')}
              placeholder="+39 123 456 7890"
              className="bg-white/5 border-white/20 focus:border-spartan-gold text-white placeholder:text-white/40 h-14 text-lg rounded-xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mb-8"
          >
            <label className="text-lg text-spartan-gold mb-3 block font-semibold">
              Area di Interesse
            </label>
            <select
              {...register('interest')}
              className="w-full bg-white/5 border border-white/20 rounded-xl px-6 py-4 text-white text-lg focus:border-spartan-gold focus:outline-none transition-all duration-300 h-14"
            >
              <option value="bot" className="bg-spartan-black">Fury Of Sparta Bot Premium</option>
              <option value="academy" className="bg-spartan-black">Trading Academy VIP</option>
              <option value="both" className="bg-spartan-black">Pacchetto Completo Elite</option>
              <option value="info" className="bg-spartan-black">Informazioni Generali</option>
            </select>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mb-10"
          >
            <label className="text-lg text-spartan-gold mb-3 block font-semibold">
              Il Tuo Messaggio *
            </label>
            <Textarea
              {...register('message')}
              placeholder="Raccontaci la tua esperienza nel trading e i tuoi obiettivi. Il nostro team di esperti preparerà una strategia personalizzata per te..."
              rows={6}
              className="bg-white/5 border-white/20 focus:border-spartan-gold text-white placeholder:text-white/40 text-lg rounded-xl resize-none"
            />
            {errors.message && (
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-red-400 text-sm mt-2 flex items-center gap-2"
              >
                <Shield className="w-4 h-4" />
                {errors.message.message}
              </motion.p>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full btn-luxury text-xl py-6 shadow-glow-gold group relative overflow-hidden"
            >
              <div className="flex items-center justify-center gap-3 relative z-10">
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-6 h-6 animate-spin" />
                    <span className="font-bold">INVIO IN CORSO...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                    <span className="font-bold">INVIA MESSAGGIO VIP</span>
                    <Crown className="w-5 h-5" />
                  </>
                )}
              </div>
            </Button>

            {/* Premium guarantee */}
            <div className="flex items-center justify-center gap-6 mt-6 text-sm">
              <div className="flex items-center gap-2 text-green-400">
                <Shield className="w-4 h-4" />
                <span className="font-medium">Risposta garantita in 24h</span>
              </div>
              <div className="flex items-center gap-2 text-blue-400">
                <Crown className="w-4 h-4" />
                <span className="font-medium">Consulenza gratuita</span>
              </div>
            </div>
          </motion.div>
        </motion.form>
      </motion.div>
    </div>
  )
}