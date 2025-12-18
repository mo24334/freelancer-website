'use client'

import { useRef, useState } from 'react'
import { sendEmail } from '../components/sendEmail'

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [error, setError] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!formRef.current) return

    setStatus('sending')
    const result = await sendEmail(formRef.current)

    if (result.ok) {
      setStatus('success')
      formRef.current.reset()
    } else {
      setStatus('error')
      setError(result.error)
    }
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" required />
      <input name="email" type="email" placeholder="Email" required />
      <textarea name="message" placeholder="Message" required />
      <button type="submit" disabled={status === 'sending'}>
        Send
      </button>

      {status === 'success' && <p>✅ Message sent</p>}
      {status === 'error' && <p>❌ {error}</p>}
    </form>
  )
}
