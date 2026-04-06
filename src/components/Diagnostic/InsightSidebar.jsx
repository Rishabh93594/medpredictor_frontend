export default function InsightSidebar({ history = [], module = "diabetes" }) {
  const defaultHistory = [
    { id: "#8821", name: "Patient #8821", risk: "Low Risk", status: "low" },
    { id: "#9042", name: "Patient #9042", risk: "High Risk", status: "high" },
  ];

  const currentHistory = history.length > 0 ? history.slice(0, 5) : defaultHistory;

  const insights = {
    diabetes: {
      quote: "High Glucose combined with a Pedigree score over 0.5 often triggers early intervention alerts.",
      factors: ["↑ Blood Glucose", "↑ BMI Index"]
    },
    heart: {
      quote: "High cholesterol and chest pain type indicate elevated cardiac risk in the current patient profile.",
      factors: ["↑ Cholesterol", "↑ Blood Pressure"]
    },
    liver: {
      quote: "Elevated Bilirubin levels suggest potential hepatic congestion. Monitor enzymatic activity closely.",
      factors: ["↑ Bilirubin", "↓ Albumin State"]
    }
  };

  const activeInsight = insights[module] || insights.diabetes;

  return (
    <aside className="insight-sidebar">
      <div className="insight-card glass-card">
        <div className="ai-label">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
          AI Diagnostic Insights
        </div>
        <p className="insight-quote">
          "{activeInsight.quote}"
        </p>

        <div className="risk-factors-list" style={{ marginBottom: '2rem' }}>
          <p className="user-role" style={{ marginBottom: '0.75rem', color: 'var(--text-muted)' }}>TOP RISK FACTORS</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {activeInsight.factors.map((factor, idx) => (
              <span key={idx} style={{ 
                padding: '0.4rem 0.8rem', 
                background: 'rgba(239, 68, 68, 0.1)', 
                color: '#EF4444', 
                borderRadius: '8px', 
                fontSize: '0.7rem', 
                fontWeight: '700' 
              }}>
                {factor}
              </span>
            ))}
          </div>
        </div>

        <div className="recent-predictions">
          <p className="user-role" style={{ marginBottom: '1rem', color: 'var(--text-muted)' }}>RECENT SCANS</p>
          {currentHistory.map((item, idx) => (
            <div key={idx} className="recent-prediction-item">
              <div className="prediction-info" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div className={`status-dot status-${item.status === 'High Risk' || item.risk?.includes('High') ? 'high' : 'low'}`}></div>
                <span className="user-name" style={{ fontSize: '0.8rem' }}>{item.id || `Patient #${idx + 1}`}</span>
              </div>
              <div className="prediction-status-bar">
                <span className={`status-${item.status === 'High Risk' || item.risk?.includes('High') ? 'high' : 'low'}`} style={{ fontSize: '0.7rem', textTransform: 'uppercase' }}>
                  {item.risk || item.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="lab-card">
        <span className="lab-title">Advanced Lab Protocols</span>
        <span className="lab-meta">Updated for 2024 Clinical Standards</span>
      </div>

      <div className="help-card glass-card">
        <div className="help-icon-circle">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
        </div>
        <h4>Need assistance?</h4>
        <p className="user-role" style={{ marginTop: '0.5rem' }}>Our clinical engineering team is available 24/7 for support.</p>
      </div>
    </aside>
  );
}
