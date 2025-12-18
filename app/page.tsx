"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import SiteShell from "./components/SiteShell";
import { t } from "./components/i18n";

type Lang = "en" | "ar";

export default function HomePage() {
  const [lang, setLang] = useState<Lang>("en");

  const isAR = lang === "ar";
  const labels = useMemo(() => t[lang], [lang]);

  // Safe for client because it's NEXT_PUBLIC_*
  const whatsappNumber =
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.trim() || "9654144218";
  const whatsappHref = `https://wa.me/${whatsappNumber}`;

  return (
    <div dir={isAR ? "rtl" : "ltr"} className={isAR ? "rtl" : ""}>
      <SiteShell pageTitle={labels.hero.title} pageText={labels.hero.text}>
        <div className="btnRow">
          <button
            type="button"
            className="btn"
            onClick={() => setLang((prev) => (prev === "ar" ? "en" : "ar"))}
            aria-label="Toggle language"
          >
            {isAR ? "EN" : "AR"}
          </button>

          <Link className="btn btnPrimary" href="/contact">
            {labels.hero.quote}
          </Link>

          <a className="btn btnGreen" href={whatsappHref} target="_blank" rel="noreferrer">
            {labels.hero.whatsapp}
          </a>
        </div>

        <section className="section">
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
        </section>

        <section className="section">
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
        </section>
      </SiteShell>
    </div>
  );
}
