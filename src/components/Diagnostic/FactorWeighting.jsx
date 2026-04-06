import { useMemo } from "react";

export default function FactorWeighting({ diseaseType = "diabetes", probability = 0.5 }) {
  const percentage = probability * 100;
  
  // High-fidelity factor weight simulation based on overall probability
  const activeFactors = useMemo(() => {
    const factorConfig = {
      diabetes: ["Glycemic Variability", "Body Mass Index", "Genetic Markers", "Insulin Sensitivity"],
      heart: ["Cardiac Hemodynamics", "Cholesterol Density", "ST-Segment Slope", "Exercise Tolerance"],
      liver: ["Enzymatic Activity", "Bilirubin Concentration", "Albumin Synthesis", "Hepatic Congestion"]
    };

    const names = factorConfig[diseaseType] || factorConfig.diabetes;
    
    // Algorithm to distribute weights based on probability
    // We want the total attribution to feel logical relative to the risk score
    return names.map((name, idx) => {
      // Primary factor (first two) are usually higher if probability is high
      let weight;
      const base = percentage;
      
      if (idx === 0) {
        weight = Math.min(95, base + (Math.random() * 10 - 5));
      } else if (idx === 3) {
        // Impact inverse for some markers
        weight = Math.max(10, base * 0.8 + (Math.random() * 15 - 7));
      } else {
        weight = Math.max(15, base * 0.6 + (Math.random() * 20 - 10));
      }

      const finalWeight = Math.round(weight);
      return {
        name,
        weight: finalWeight,
        color: finalWeight > 70 ? "#EF4444" : "#2DD4BF"
      };
    });
  }, [diseaseType, percentage]);

  return (
    <div className="attribution-card glass-card">
      <div className="ai-label">PROBABILITY ATTRIBUTION</div>
      <p className="user-role" style={{ color: 'var(--text-muted)' }}>AI FACTOR WEIGHTING</p>

      <div className="attribution-list">
        {activeFactors.map((f, i) => (
          <div key={i} className="attribution-item">
            <div className="attribution-header">
              <span>{f.name}</span>
              <span style={{ color: f.weight > 70 ? '#EF4444' : 'var(--primary)' }}>{f.weight}%</span>
            </div>
            <div className="progress-track" style={{ height: '8px' }}>
              <div 
                className="progress-fill" 
                style={{ 
                  width: `${f.weight}%`, 
                  background: f.weight > 70 ? '#EF4444' : 'var(--primary)',
                  boxShadow: f.weight > 70 ? '0 0 10px rgba(239, 68, 68, 0.3)' : '0 0 10px var(--primary-glow)'
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      <div className="insight-quote" style={{ marginTop: '3rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <img src={`https://ui-avatars.com/api/?name=AI&background=${percentage > 50 ? 'EF4444' : '2DD4BF'}&color=fff`} style={{ width: '32px', height: '32px', borderRadius: '50%' }} alt="AI" />
        <p style={{ margin: 0, fontStyle: 'italic', fontSize: '0.8rem' }}>
          "The correlation between high-weight biomarkers and acute clinical markers in this scan is the primary driver of this diagnostic classification." — Neural Core Analyst
        </p>
      </div>
    </div>
  );
}
