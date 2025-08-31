import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    // Qui puoi aggiungere:
    // - Invio email con servizi come SendGrid/Resend
    // - Salvataggio in database
    // - Integrazione con CRM
    
    console.log('Contact form submission:', body)
    
    // Per ora simuliamo solo il successo
    return NextResponse.json(
      { message: 'Messaggio ricevuto con successo' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Errore durante l\'invio del messaggio' },
      { status: 500 }
    )
  }
}