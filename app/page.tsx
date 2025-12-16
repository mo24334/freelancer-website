'use client'

import Link from 'next/link'
import SiteShell from './components/SiteShell'
import { t } from './components/i18n'
import { useState } from 'react'

export default function Home() {
  const [lang, setLang] = useState<'en' | 'ar'>('en')
  const labels = t[lang]
  const isAR = lang === 'ar'

  return (
    <div className={isAR ? 'rtl' : ''}>
    <SiteShell pageTitle={labels.hero.title} pageText={labels.hero.text}>
        <div className="btnRow">
          <button className="btn" onClick={() => setLang(isAR ? 'en' : 'ar')}>
            {isAR ? 'EN' : 'AR'}
          </button>

          <Link className="btn btnPrimary" href="/contact">
            {labels.hero.quote}
          </Link>

          <a
            className="btn btnGreen"
            href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '9654144218'}`}
            target="_blank"
            rel="noreferrer"
          >
            {labels.hero.whatsapp}
          </a>
        </div>

        <div className="section">
          <h2>What I Do</h2>
          <div className="grid">
            <div className="card">
              <h3 className="cardTitle">Websites</h3>
              <p className="hText">
                Modern, responsive websites built for performance, SEO, and conversions.
              </p>
            </div>
            <div className="card">
              <h3 className="cardTitle">E-Commerce</h3>
              <p className="hText">
                Secure online stores with payment integration and easy product management.
              </p>
            </div>
            <div className="card">
              <h3 className="cardTitle">Web Applications</h3>
              <p className="hText">
                Custom dashboards, portals, and SaaS platforms built to scale.
              </p>
            </div>
          </div>
        </div>

        <div className="section">
          <h2>Popular Packages</h2>
          <div className="grid">
            <div className="card">
              <h3 className="cardTitle">Landing Page</h3>
              <div className="price">150 KWD</div>
              <ul className="list">
                <li>1 responsive page</li>
                <li>Contact form</li>
                <li>Basic SEO + SSL</li>
              </ul>
            </div>

            <div className="card">
              <h3 className="cardTitle">Business Website</h3>
              <div className="price">400 KWD</div>
              <ul className="list">
                <li>Up to 5 pages</li>
                <li>CMS</li>
                <li>Analytics + SEO</li>
              </ul>
            </div>

            <div className="card">
              <h3 className="cardTitle">E-Commerce</h3>
              <div className="price">900 KWD</div>
              <ul className="list">
                <li>Payments</li>
                <li>Up to 50 products</li>
                <li>Admin training</li>
              </ul>
            </div>
          </div>
        </div>
      </SiteShell>
    </div>
  )
}
