import '../App.css'

function TermsAndConditions() {
  return (
    <div className="terms-page-wrapper">
      {/* Navbar Section */}
      <nav className="navbar-section">
        <div className="navbar-container">
          <div className="logo-nav-group">
            <div className="logo">PROTEGA</div>
            <div className="nav-links">
              <a href="#merchants">FOR MERCHANTS</a>
              <a href="#customers">FOR CUSTOMERS</a>
              <a href="#login">LOGIN</a>
            </div>
          </div>
          <div className="header-buttons">
            <button className="btn-outline">File a Claim</button>
            <button className="btn-outline">Schedule a Demo</button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="terms-content">
        <div className="terms-header">
          <h1 className="terms-main-title">Protega Accidental Damage Protection Plan</h1>
          <h2 className="terms-subtitle">Terms and Conditions</h2>
        </div>

        <div className="terms-body">
          {/* Section 1: Introduction */}
          <section className="terms-section">
            <h3 className="terms-section-title">1. Introduction</h3>
            <div className="terms-text">
              <p className="terms-numbered-item">
                <strong>1.</strong> The Protega x IZICART Product Protection (Accidental Damage from Handling, ADH) Plan safeguards eligible IZICART products from unforeseen physical damage arising during normal household use.
              </p>
              <p className="terms-numbered-item">
                <strong>2.</strong> This Plan is a service contract administered by Protega India Pvt. Ltd. on behalf of IZICART. It is not an insurance policy and does not extend or replace the manufacturer's standard warranty.
              </p>
              <p className="terms-numbered-item">
                <strong>3.</strong> The Plan covers accidental damage such as:
              </p>
              <ul className="terms-bullet-list">
                <li>Drops, falls, or collisions resulting in functional or structural damage.</li>
                <li>Screen or lens cracks due to impact.</li>
                <li>Gimbal or motor misalignment after impact.</li>
                <li>Liquid or moisture damage due to accidental exposure.</li>
                <li>Connector or internal component failure due to mishandling.</li>
              </ul>
              <p className="terms-numbered-item">
                <strong>4.</strong> Coverage begins on the date of delivery or activation (whichever is later) and is valid for 12 or 24 months as per the purchased plan.
              </p>
              <p className="terms-numbered-item">
                <strong>5.</strong> The Plan is applicable within India only and all claims are serviced via Protega's authorized repair network.
              </p>
              <p className="terms-numbered-item">
                <strong>6.</strong> A deductible of 10% of product value or ₹500 (whichever is lower) applies per approved claim.
              </p>
              <p className="terms-numbered-item">
                <strong>7.</strong> The Plan applies to IZICART products such as Cameras, Gimbals, Microphones, Audio Devices, Ring Lights, Smartwatches, Dash Cameras, and similar lifestyle gadgets intended for personal use.
              </p>
            </div>
          </section>

          {/* Section 2: Customer Responsibilities */}
          <section className="terms-section">
            <h3 className="terms-section-title">2. Customer Responsibilities</h3>
            <ul className="terms-bullet-list">
              <li>Retain proof of purchase, ADP certificate, and payment confirmation.</li>
              <li>Report incidents within 72 hours of occurrence with full details and evidence.</li>
              <li>Avoid unauthorized repairs or third-party service attempts.</li>
              <li>Follow manufacturer's maintenance and care guidelines.</li>
              <li>Remove or back up all personal data before service.</li>
              <li>Cooperate during inspection, pickup, and claim validation.</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}

export default TermsAndConditions
