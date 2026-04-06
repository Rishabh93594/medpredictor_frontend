import { useNavigate } from "react-router-dom";
import LandingNavbar from "../components/Landing/LandingNavbar";
import Footer from "../components/Footer";

export default function Predict() {
  const navigate = useNavigate();

  const selectionCards = [
    {
      title: "Cardiac Analysis",
      id: "heart",
      description: "Advanced cardiovascular risk assessment using 13 clinical markers including EKG patterns, cholesterol levels, and hemodynamic metrics.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.84-8.84 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
      ),
      preview: "EKG, BP, ST-Depression"
    },
    {
      title: "Diabetes Screening",
      id: "diabetes",
      description: "Neural-mapped glucose monitoring and insulin sensitivity analysis based on the Pima Indians clinical research framework.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
      ),
      preview: "Glucose, BMI, Pedigree"
    },
    {
      title: "Hepatic Diagnostics",
      id: "liver",
      description: "Comprehensive assessment of liver function through enzymatic activity markers, bilirubin levels, and protein concentration analysis.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
      ),
      preview: "Bilirubin, Albumin, SGPT"
    }
  ];

  const handleStart = (id) => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate(`/predict/${id}`);
    } else {
      // Redirect to login but track where they wanted to go
      navigate("/login", { state: { from: `/predict/${id}` } });
    }
  };

  return (
    <main className="landing-page">
      <LandingNavbar />
      
      <section className="section" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 4rem' }}>
            <h2 className="section-title">Specialized Diagnostic Center</h2>
            <p className="user-role" style={{ color: 'var(--text-muted)' }}>
              Select a clinical module to begin your neural risk assessment. 
              Our engines are cross-referenced with global medical datasets for maximum precision.
            </p>
          </div>

          <div className="predict-selection-grid">
            {selectionCards.map((card, idx) => (
              <div key={idx} className="predict-card glass-card">
                <div className="predict-card-header">
                  <div className="predict-icon-circle">
                    {card.icon}
                  </div>
                  <div className="neural-status">
                    <div className="neural-dot"></div>
                    Engine Ready
                  </div>
                </div>
                
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                
                <div className="predict-preview">
                  <span className="preview-label">Metrics Analyzed:</span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-main)', fontWeight: '600' }}>{card.preview}</span>
                </div>

                <button 
                  onClick={() => handleStart(card.id)} 
                  className="btn btn-primary" 
                  style={{ marginTop: '2.5rem', width: '100%' }}
                >
                  Start Prediction
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}