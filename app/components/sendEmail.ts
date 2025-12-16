import emailjs from '@emailjs/browser'

export type ContactPayload = {
  name: string
  email: string
  message: string
}

function mustGetEnv(key: string) {
  const val = process.env[key]
  if (!val || !val.trim()) throw new Error(`Missing env: ${key}`)
  return val.trim()
}

let inited = false
function initEmailJS() {
  if (inited) return
  const publicKey = mustGetEnv('NEXT_PUBLIC_EMAILJS_PUBLIC_KEY')
  emailjs.init({ publicKey })
  inited = true
}

export async function sendEmail(payload: ContactPayload) {
  initEmailJS()

  const serviceId = mustGetEnv('NEXT_PUBLIC_EMAILJS_SERVICE_ID')
  const templateId = mustGetEnv('NEXT_PUBLIC_EMAILJS_TEMPLATE_ID')

  // must match template variables in EmailJS
  const templateParams = {
    name: payload.name,
    email: payload.email,
    message: payload.message,
    time: new Date().toLocaleString(),
    title: `Contact Us: ${payload.name}`,
  }

  const res = await emailjs.send(serviceId, templateId, templateParams)
  return res
}
