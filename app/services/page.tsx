import SiteShell from '../components/SiteShell'

export default function ServicesPage() {
  return (
    <SiteShell pageTitle="Services" pageText="Website and app development services in Kuwait.">
      <div className="section">
        <div className="card">
          <h3 className="cardTitle">My Services</h3>
          <ul className="list">
            <li>Business websites</li>
            <li>E-commerce stores</li>
            <li>Custom web applications</li>
            <li>Mobile applications</li>
          </ul>
        </div>
      </div>
    </SiteShell>
  )
}
