import SiteShell from '../components/SiteShell'

export default function PricingPage() {
  return (
    <SiteShell pageTitle="Pricing" pageText="Clear packages and starting prices in KWD.">
      <div className="section">
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

        <div className="section">
          <div className="grid">
            <div className="card">
              <h3 className="cardTitle">Web App / SaaS MVP</h3>
              <div className="price">From 2,400 KWD</div>
              <ul className="list">
                <li>Auth + dashboard</li>
                <li>Backend + database</li>
                <li>Admin panel</li>
              </ul>
            </div>

            <div className="card">
              <h3 className="cardTitle">Mobile App MVP</h3>
              <div className="price">2,800 KWD</div>
              <ul className="list">
                <li>iOS/Android MVP</li>
                <li>Basic backend</li>
                <li>Core features</li>
              </ul>
            </div>

            <div className="card">
              <h3 className="cardTitle">Maintenance</h3>
              <div className="price">30–80 KWD / mo</div>
              <ul className="list">
                <li>Updates + security</li>
                <li>Small edits</li>
                <li>Backups</li>
              </ul>
              <p className="note">Pro: 150–400 KWD / mo</p>
            </div>
          </div>
        </div>
      </div>
    </SiteShell>
  )
}
