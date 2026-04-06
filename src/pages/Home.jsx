import { Link } from "react-router-dom";
import LandingNavbar from "../components/Landing/LandingNavbar";
import Hero from "../components/Landing/Hero";
import DiagnosticCapabilities from "../components/Landing/DiagnosticCapabilities";
import HowItWorks from "../components/Landing/HowItWorks";
import Stats from "../components/Landing/Stats";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="landing-page">
      <LandingNavbar />
      <Hero />
      <Stats />
      <DiagnosticCapabilities />
      <HowItWorks />
      
      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container cta-content glass-card">
          <div className="cta-header">
            <h2 className="cta-title">Start Your Health Risk Assessment Today</h2>
            <p className="cta-subtitle">Empower your clinical decisions with AI-driven precision diagnostics. Get started in minutes.</p>
          </div>
          <div className="cta-actions">
            <Link to="/register" className="btn btn-primary btn-lg">Create Free Account</Link>
            <Link to="/about" className="btn btn-outline btn-lg">Learn Process</Link>
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        .landing-page {
          overflow-x: hidden;
        }
        
        .cta-section {
          padding-top: 4rem;
          padding-bottom: 8rem;
        }
        
        .cta-content {
          padding: 5rem 4rem;
          text-align: center;
          background: linear-gradient(135deg, rgba(16, 23, 38, 0.9) 0%, rgba(10, 14, 26, 0.9) 100%);
          border-color: var(--primary-glow);
          position: relative;
          overflow: hidden;
        }
        
        .cta-content::before {
          content: "";
          position: absolute;
          top: -20%;
          right: -10%;
          width: 300px;
          height: 300px;
          background: var(--primary);
          filter: blur(150px);
          opacity: 0.1;
          z-index: -1;
        }
        
        .cta-title {
          font-size: 2.75rem;
          margin-bottom: 1.5rem;
          line-height: 1.2;
        }
        
        .cta-subtitle {
          color: var(--text-muted);
          font-size: 1.1rem;
          max-width: 600px;
          margin: 0 auto 3rem;
        }
        
        .cta-actions {
          display: flex;
          gap: 1.5rem;
          justify-content: center;
        }
        
        .btn-lg {
          padding: 1.2rem 2.5rem;
          font-size: 1.1rem;
        }
        
        @media (max-width: 768px) {
          .cta-content { padding: 3rem 2rem; }
          .cta-title { font-size: 2rem; }
          .cta-actions { flex-direction: column; }
        }
      `}</style>
    </main>
  );
}