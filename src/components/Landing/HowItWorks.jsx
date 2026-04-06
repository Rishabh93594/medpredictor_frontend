import aiBrain from "../../assets/ai-brain.png";

export default function HowItWorks() {
  const steps = [
    {
      id: "01",
      title: "Secure Data Input",
      description: "Securely upload anonymized patient biomarkers or sync with hospital EHR systems using HIPAA-compliant protocols."
    },
    {
      id: "02",
      title: "Neural Engine Processing",
      description: "Our sedimented AI runs cross-referenced analysis against global medical databases to identify risk patterns."
    },
    {
      id: "03",
      title: "Actionable Insights",
      description: "Receive comprehensive diagnostic reports with predictive probability scores and suggested clinical pathways."
    }
  ];

  return (
    <section className="section workflow">
      <div className="container workflow-grid">
        <div className="workflow-content">
          <h2 className="workflow-title">
            Precision Diagnostics in <span className="gradient-text">Three Simple Steps</span>
          </h2>
          
          <div className="steps-list">
            {steps.map((step, idx) => (
              <div key={idx} className="step-item">
                <div className="step-number">{step.id}</div>
                <div className="step-text">
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-description">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="workflow-visual">
          <div className="visual-container">
            <img src={aiBrain} alt="AI Neural Network Diagnostic" className="ai-brain-img" />
            <div className="visual-glow"></div>
            <div className="visual-tag">
               <span className="dot"></span> NEURAL NETWORK READY
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .workflow {
          padding: 8rem 0;
          background: linear-gradient(to bottom, transparent, rgba(45, 212, 191, 0.05), transparent);
        }
        
        .workflow-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 4rem;
          align-items: center;
        }
        
        @media (max-width: 968px) {
          .workflow-grid {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .steps-list {
            text-align: left;
            margin: 0 auto;
            max-width: 500px;
          }
        }
        
        .workflow-title {
          font-size: 3rem;
          line-height: 1.2;
          margin-bottom: 3.5rem;
        }
        
        .steps-list {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }
        
        .step-item {
          display: flex;
          gap: 1.5rem;
          align-items: flex-start;
        }
        
        .step-number {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: var(--primary);
          color: #000;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 0.9rem;
          flex-shrink: 0;
          box-shadow: 0 0 20px var(--primary-glow);
        }
        
        .step-title {
          font-size: 1.25rem;
          margin-bottom: 0.5rem;
        }
        
        .step-description {
          color: var(--text-muted);
          font-size: 0.95rem;
          line-height: 1.6;
        }
        
        .workflow-visual {
          display: flex;
          justify-content: center;
          position: relative;
        }
        
        .visual-container {
          position: relative;
          width: 100%;
          max-width: 500px;
          aspect-ratio: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          background: radial-gradient(circle at center, rgba(45, 212, 191, 0.1) 0%, transparent 70%);
        }
        
        .ai-brain-img {
          width: 90%;
          height: auto;
          filter: drop-shadow(0 0 30px var(--primary-glow));
          animation: float 6s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        
        .visual-glow {
          position: absolute;
          width: 60%;
          height: 60%;
          background: var(--primary);
          filter: blur(100px);
          opacity: 0.1;
          z-index: -1;
        }
        
        .visual-tag {
          position: absolute;
          bottom: 10%;
          right: 10%;
          padding: 0.75rem 1.25rem;
          background: rgba(16, 23, 38, 0.8);
          backdrop-filter: blur(8px);
          border: 1px solid var(--border);
          border-radius: 12px;
          font-size: 0.8rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-main);
          box-shadow: 0 10px 30px rgba(0,0,0,0.5);
        }
      `}</style>
    </section>
  );
}
