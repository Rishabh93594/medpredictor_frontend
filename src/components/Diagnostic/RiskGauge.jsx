export default function RiskGauge({ percentage = 0, risk = "Low Risk" }) {
  const radius = 90;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  const getColor = () => {
    if (percentage < 30) return "#2DD4BF"; // Teal
    if (percentage < 70) return "#EAB308"; // Amber
    return "#EF4444"; // Red
  };

  const color = getColor();

  return (
    <div className="risk-gauge-card glass-card" style={{ position: 'relative' }}>
      <div className="ai-label" style={{ marginBottom: '2rem' }}>AI ANALYSIS RISK SCORE</div>
      
      <div style={{ position: 'relative' }}>
        <svg className="gauge-svg">
          <circle className="gauge-track" cx="120" cy="120" r={radius} />
          <circle 
            className="gauge-fill" 
            cx="120" 
            cy="120" 
            r={radius} 
            stroke={color}
            strokeDasharray={circumference}
            style={{ strokeDashoffset }}
          />
        </svg>
        
        <div className="gauge-content">
          <span className="gauge-percentage" style={{ color }}>{percentage}%</span>
          <span className="gauge-label" style={{ color }}>{risk}</span>
        </div>
      </div>

      <p className="user-role" style={{ color: 'var(--text-muted)', maxWidth: '280px', marginTop: '1rem' }}>
        The Clinical Neural Engine detected multiple significant biomarkers indicating physiological patterns consistent with {risk.toLowerCase()} classification.
      </p>
    </div>
  );
}
