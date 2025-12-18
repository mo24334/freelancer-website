'use client'

import emailjs from '@emailjs/browser'

type SendEmailResult =
  | { ok: true }
  | { ok: false; error: string }

export async function sendEmail(
  form: HTMLFormElement
): Promise<SendEmailResult> {
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID

  if (!publicKey || !serviceId || !templateId) {
    return {
      ok: false,
      error: 'Email service is not configured (missing env variables)',
    }
  }

  try {
    await emailjs.sendForm(serviceId, templateId, form, publicKey)
    return { ok: true }
  } catch (err) {
    console.error('EmailJS error:', err)
    return {
      ok: false,
      error: 'Failed to send email. Try again later.',
    }
  }
}