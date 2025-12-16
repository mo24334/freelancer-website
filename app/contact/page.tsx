'use client'

import { useState } from 'react'
import SiteShell from '../components/SiteShell'
import { sendEmail } from '../components/sendEmail'

type Status = 'idle' | 'sending' | 'sent' | 'error'

export default function ContactPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState<string>('')

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('sending')
    setErrorMsg('')

    try {
      const res = await sendEmail({ name, email, message })
      console.log('EMAIL SENT OK:', res)

      setStatus('sent')
      setName('')
      setEmail('')
      setMessage('')
    } catch (err: any) {
      console.error('EMAIL FAILED:', err)
      setStatus('error')
      setErrorMsg(err?.message || String(err))
    }
  }

  return (
    <SiteShell
      pageTitle="Contact"
      pageText="Tell me about your project and I’ll reply with a clear plan and timeline."
    >
      <div className="section">
        <form className="card" onSubmit={onSubmit}>
          <input
            className="input"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            className="input"
            placeholder="Your email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <textarea
            className="textarea"
            placeholder="Your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows={6}
          />

          <button
            className="btn btnPrimary"
            type="submit"
            disabled={status === 'sending'}
          >
            {status === 'sending' ? 'Sending...' : 'Send'}
          </button>

          {status === 'sent' && (
            <p className="note">✅ Message sent! Check your inbox.</p>
          )}

          {status === 'error' && (
            <p className="note">
              ❌ Failed. <br />
              <b>Error:</b> {errorMsg}
            </p>
          )}
        </form>
      </div>
    </SiteShell>
  )
}
