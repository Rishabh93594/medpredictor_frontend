export default function TreatmentProtocols({ risk = "Low Risk" }) {
  const isHigh = risk?.toLowerCase().includes("high");

  const protocols = [
    {
      title: "Dietary Adaptation",
      desc: isHigh ? "Shift to a low-glycemic Mediterranean protocol. Focus on complex carbohydrates and high-fiber intake to stabilize response." : "Maintain current balanced nutrition. Focus on antioxidant-rich micronutrients and consistent hydration levels.",
      linkText: "NUTRITION LEVEL 1 >",
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8"></path><path d="M10 19v2"></path><path d="M9 21h6"></path><path d="M19 16l3 3-3 3"></path><path d="M15 19l3 3 3-3"></path></svg>
    },
    {
      title: "Exercise Routine",
      desc: isHigh ? "45 minutes of Zone 2 aerobic training 4x weekly. Combined with resistance training to improve glucose disposal." : "30 minutes of moderate activity 3x weekly. Suggested: swimming, cycling, or brisk walking for cardiovascular maintenance.",
      linkText: "FITNESS PLAN >",
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 3h12"></path><path d="M18 20l-4-4"></path><path d="M6 20l4-4"></path><path d="M12 16V8"></path><path d="M9 8h6"></path></svg>
    },
    {
      title: "Medical Consultation",
      desc: isHigh ? "Immediate consultation with an endocrinologist or specialist is advised due to the clinical markers and secondary clusters." : "Routine specialist follow-up within 6 months. Continue monitoring glycemic and metabolic markers as per standard protocol.",
      linkText: isHigh ? "PRIORITY URGENT >" : "SCHEDULED FOLLOWUP >",
      accent: isHigh ? "#EF4444" : "var(--primary)",
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
    }
  ];

  return (
    <div className="protocol-container" style={{ marginTop: '3rem' }}>
      <h3 className="section-title" style={{ fontSize: '1.25rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
        AI-Generated Treatment Protocol
      </h3>
      <div className="protocol-grid">
        {protocols.map((p, i) => (
          <div key={i} className="protocol-card glass-card">
            <div className="protocol-icon" style={{ color: p.accent || 'var(--primary)', background: `rgba(${p.accent === '#EF4444' ? '239, 68, 68' : '45, 212, 191'}, 0.1)` }}>
              {p.icon}
            </div>
            <h4 className="protocol-title">{p.title}</h4>
            <p className="protocol-desc">{p.desc}</p>
            <div className="protocol-link" style={{ color: p.accent || 'var(--primary)' }}>
              {p.linkText}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
