'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Send, Loader2 } from 'lucide-react'
// Update the import path below if your Button component is located elsewhere
import { Button } from '../ui/button'
// If the Input component exists at a different path, update the import accordingly, for example:
import { Input } from '../ui/input'
// Or, if you need to create a simple Input component, you can do so as follows:

// import { Input } from '../ui/input'
// Simple Textarea component if you don't have a custom one
const Textarea = (props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) => (
  <textarea {...props} />
)
// Update the import path below to the correct relative path if needed
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
          title: "Messaggio inviato!",
          description: "Ti contatteremo presto, guerriero!",
        })
        reset()
      } else {
        throw new Error('Errore invio form')
      }
    } catch (error) {
      toast({
        title: "Errore",
        description: "Si è verificato un errore. Riprova.",
        variant: "destructive"
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 glass-effect rounded-xl p-8"
    >
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="text-sm text-spartan-gold mb-2 block">
            Nome Completo *
          </label>
          <Input
            {...register('name')}
            placeholder="Marcus Aurelius"
            className="bg-spartan-black/50 border-spartan-gold/30 focus:border-spartan-gold"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label className="text-sm text-spartan-gold mb-2 block">
            Email *
          </label>
          <Input
            {...register('email')}
            type="email"
            placeholder="guerriero@sparta.com"
            className="bg-spartan-black/50 border-spartan-gold/30 focus:border-spartan-gold"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div>
        <label className="text-sm text-spartan-gold mb-2 block">
          Telefono (Opzionale)
        </label>
        <Input
          {...register('phone')}
          placeholder="+39 123 456 7890"
          className="bg-spartan-black/50 border-spartan-gold/30 focus:border-spartan-gold"
        />
      </div>

      <div>
        <label className="text-sm text-spartan-gold mb-2 block">
          Interesse
        </label>
        <select
          {...register('interest')}
          className="w-full bg-spartan-black/50 border border-spartan-gold/30 rounded-md px-3 py-2 text-white focus:border-spartan-gold focus:outline-none"
        >
          <option value="bot">Fury Of Sparta Bot</option>
          <option value="academy">Academy</option>
          <option value="both">Bot + Academy</option>
          <option value="info">Informazioni Generali</option>
        </select>
      </div>

      <div>
        <label className="text-sm text-spartan-gold mb-2 block">
          Messaggio *
        </label>
        <Textarea
          {...register('message')}
          placeholder="Raccontaci la tua battaglia nei mercati..."
          rows={5}
          className="bg-spartan-black/50 border-spartan-gold/30 focus:border-spartan-gold"
        />
        {errors.message && (
          <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
        )}
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-spartan-red hover:bg-spartan-red/80 text-white font-bold py-3"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Invio in corso...
          </>
        ) : (
          <>
            <Send className="mr-2 h-4 w-4" />
            INVIA MESSAGGIO
          </>
        )}
      </Button>
    </motion.form>
  )
}