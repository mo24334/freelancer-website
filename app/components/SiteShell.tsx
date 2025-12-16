'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import type { Lang } from './i18n'
import { t } from './i18n'

function cx(...arr: Array<string | false | undefined>) {
  return arr.filter(Boolean).join(' ')
}

export default function SiteShell({
  children,
  pageTitle,
  pageText,
}: {
  children: React.ReactNode
  pageTitle: string
  pageText?: string
}) {
  const pathname = usePathname()
  const [lang, setLang] = useState<Lang>('en')

  const isAR = lang === 'ar'
  const labels = t[lang]

  const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '9654144218'
  const waLink = `https://wa.me/${whatsapp}`

  return (
    <div className={cx(isAR && 'rtl')}>
      <div className="nav">
        <div className="container navInner">
          <div className="brand">Mohammad Ahmad</div>

          <div className="links">
            <Link className="link" href="/">
              {labels.nav.home}
            </Link>
            <Link className="link" href="/services">
              {labels.nav.services}
            </Link>
            <Link className="link" href="/pricing">
              {labels.nav.pricing}
            </Link>
            <Link className="link" href="/contact">
              {labels.nav.contact}
            </Link>

            <button className="toggle" onClick={() => setLang(isAR ? 'en' : 'ar')}>
              {isAR ? 'EN' : 'AR'}
            </button>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="pageHead">
          <h1>{pageTitle}</h1>
          {pageText ? <p>{pageText}</p> : null}
        </div>

        {children}
      </div>

      <div className="whatsappFloat">
        <a href={waLink} target="_blank" rel="noreferrer">
          {labels.hero.whatsapp} • 4144218
        </a>
      </div>

      <div className="container footer">
        © {new Date().getFullYear()} Mohammad Ahmad — Web & App Development, Kuwait •{' '}
        <span style={{ color: 'var(--muted)' }}>
          Phone: 4144218 • Email: q8tymohammad@gmail.com
        </span>
      </div>
    </div>
  )
}
    