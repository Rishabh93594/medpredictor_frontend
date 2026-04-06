import LandingNavbar from "../components/Landing/LandingNavbar";
import Footer from "../components/Footer";

export default function About() {
  return (
    <main className="landing-page">
      <LandingNavbar />
      <div className="container" style={{ padding: '8rem 0' }}>
        <h2 className="section-title">MedPredictor Neural Protocol</h2>
        <p className="user-role" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem' }}>
          Documenting the methodology, model architecture, and clinical workflow governing our diagnostic predictions.
        </p>
        
        <div className="about-grid">
          <div className="about-card glass-card">
            <h3>Neural Engine Architecture</h3>
            <p> MedPredictor utilizes sophisticated **XGBoost** and **Scikit-learn** models trained on diverse clinical datasets. Our engine performs cross-referenced analysis by weighing patient history against 20+ clinical biochemical markers.</p>
          </div>
          
          <div className="about-card glass-card">
            <h3>Diagnostic Datasets</h3>
            <p>Our models are trained on gold-standard medical repositories, including the UCI Heart Disease dataset, Pima Indians Diabetes database, and the ILPD (Indian Liver Patient Dataset), ensuring high-fidelity baseline accuracy.</p>
          </div>
          
          <div className="about-card glass-card">
            <h3>Clinical Workflow</h3>
            <ol className="workflow-list">
              <li>**Data Ingestion**: Standardizing clinical inputs into normalized neural vectors.</li>
              <li>**Probability Mapping**: Generating certainty scores through 100+ decision trees.</li>
              <li>**Risk Profiling**: Categorizing results into actionable clinical pathways.</li>
            </ol>
          </div>
        </div>
      </div>
      <Footer />
      
      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }
        .about-card h3 {
          color: var(--primary);
          margin-bottom: 1.5rem;
          font-size: 1.5rem;
        }
        .about-card p {
          color: var(--text-muted);
          line-height: 1.8;
          font-size: 0.95rem;
        }
        .workflow-list {
          padding-left: 1.2rem;
          color: var(--text-muted);
        }
        .workflow-list li {
          margin-bottom: 1rem;
        }
        .workflow-list b { color: var(--text-main); }
      `}</style>
    </main>
  );
}
