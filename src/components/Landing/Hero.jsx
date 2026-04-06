import heroMockup from "../../assets/hero-mockup.png";

export default function Hero() {
  return (
    <section className="section hero">
      <div className="container hero-content">
        <div className="hero-text-block">
          <div className="hero-badge">
            <span className="dot"></span>
            NEXT GEN CLINICAL INTELLIGENCE
          </div>
          
          <h1 className="hero-title">
            AI-Based <span className="gradient-text">Disease Prediction</span> System
          </h1>
          
          <p className="hero-description">
            Empowering healthcare providers with predictive clinical intelligence. 
            Analyze complex biomarkers with 99.8% precision through our neural diagnostic engine.
          </p>
          
          <div className="hero-actions">
            <button className="btn btn-primary">Check Prediction</button>
            <button className="btn btn-outline">View Documentation</button>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="hero-image-container">
            <img src={heroMockup} alt="AI Health Dashboard Mockup" className="hero-mockup" />
            <div className="hero-glow"></div>
          </div>
        </div>
      </div>
      
      <style>{`
        .hero {
          padding-top: 10rem;
          padding-bottom: 5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        
        .hero-text-block {
          max-width: 800px;
          margin: 0 auto;
          z-index: 2;
        }
        
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          background: rgba(45, 212, 191, 0.1);
          border: 1px solid rgba(45, 212, 191, 0.2);
          border-radius: 100px;
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--primary);
          margin-bottom: 2rem;
          letter-spacing: 0.05em;
        }
        
        .dot {
          width: 6px;
          height: 6px;
          background-color: var(--primary);
          border-radius: 50%;
          box-shadow: 0 0 10px var(--primary);
        }
        
        .hero-title {
          font-size: 4rem;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          color: var(--text-main);
        }
        
        @media (max-width: 768px) {
          .hero-title { font-size: 2.5rem; }
        }
        
        .hero-description {
          font-size: 1.125rem;
          color: var(--text-muted);
          max-width: 600px;
          margin: 0 auto 2.5rem;
        }
        
        .hero-actions {
          display: flex;
          gap: 1.5rem;
          justify-content: center;
          margin-bottom: 4rem;
        }
        
        .hero-visual {
          width: 100%;
          max-width: 1000px;
          margin: 0 auto;
          position: relative;
        }
        
        .hero-image-container {
          position: relative;
          padding: 1.5rem;
          background: var(--glass);
          border: 1px solid var(--border);
          border-radius: 32px;
          box-shadow: 0 40px 100px -20px black;
        }
        
        .hero-mockup {
          width: 100%;
          height: auto;
          border-radius: 20px;
          display: block;
          filter: contrast(1.1);
        }
        
        .hero-glow {
          position: absolute;
          top: 10%;
          left: 10%;
          right: 10%;
          bottom: 10%;
          background: var(--primary);
          filter: blur(120px);
          opacity: 0.15;
          z-index: -1;
        }
      `}</style>
    </section>
  );
}
