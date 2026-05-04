export default function DiagnosticCapabilities() {
  const capabilities = [
    {
      title: "Diabetes Prediction",
      description: "Analyze individual glucose levels, insulin markers, and BMI to predict early-stage diabetic risk with 98% accuracy.",
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
      ),
      link: "/predict/diabetes"
    },
    {
      title: "Heart Disease",
      description: "Advanced cardiac risk profiling using real-time vital monitoring and historical arterial metric data analysis.",
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
      ),
      link: "/predict/heart"
    },
    { 
      title: "Liver Disease",
      description: "Assess hepatic health indicators through predictive biomarker analysis for early diagnostic detection.",
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.051.544c-.313.313-.458.743-.393 1.17l.555 3.655A2 2 0 007.13 22h9.739a2 2 0 001.97-1.416l.555-3.655a2 2 0 00-.393-1.17zM9 9a3 3 0 116 0 3 3 0 01-6 0z"></path></svg>
      ),
      link: "/predict/liver"
    }
  ];

  return (
    <section className="section bg-alt">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Diagnostic Capabilities</h2>
          <p className="section-subtitle">
            Our specialized AI models are trained on millions of clinical records to identify subtle precursors of chronic conditions.
          </p>
        </div>

        <div className="capabilities-grid">
          {capabilities.map((cap, idx) => (
            <div key={idx} className="glass-card capability-card">
              <div className="card-icon-container">
                {cap.icon}
              </div>
              <h3 className="card-title">{cap.title}</h3>
              <p className="card-description">{cap.description}</p>
              <a href={cap.link} className="card-link">
                Run Model <span>&rarr;</span>
              </a>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .bg-alt {
          background: radial-gradient(circle at 50% 50%, rgba(45, 212, 191, 0.03) 0%, transparent 100%);
        }
        
        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }
        
        .section-title {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }
        
        .section-subtitle {
          color: var(--text-muted);
          max-width: 600px;
          margin: 0 auto;
        }
        
        .capabilities-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }
        
        .capability-card {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        
        .card-icon-container {
          width: 48px;
          height: 48px;
          background: rgba(45, 212, 191, 0.1);
          color: var(--primary);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
        }
        
        .card-icon-container svg {
          width: 24px;
          height: 24px;
        }
        
        .card-title {
          font-size: 1.25rem;
          margin-bottom: 0.75rem;
        }
        
        .card-description {
          color: var(--text-muted);
          font-size: 0.95rem;
          margin-bottom: 1.5rem;
          line-height: 1.5;
        }
        
        .card-link {
          color: var(--primary);
          text-decoration: none;
          font-weight: 600;
          font-size: 0.9rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          transition: var(--transition);
        }
        
        .card-link:hover {
          gap: 0.75rem;
        }
      `}</style>
    </section>
  );
}
