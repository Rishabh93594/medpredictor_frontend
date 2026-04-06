import { useEffect, useState } from "react";

export default function RiskMeter({ formData }) {
  const [estimatedRisk, setEstimatedRisk] = useState(0);

  useEffect(() => {
    // Simplified weighting for real-time visual estimation
    let risk = 0;
    
    if (parseFloat(formData.age) > 60) risk += 15;
    if (parseFloat(formData.trestbps) > 140) risk += 20;
    if (parseFloat(formData.chol) > 240) risk += 15;
    if (parseFloat(formData.thalach) < 120 && formData.thalach > 0) risk += 10;
    if (formData.cp !== "0") risk += 20;
    if (parseFloat(formData.oldpeak) > 1.5) risk += 20;

    setEstimatedRisk(Math.min(risk, 100));
  }, [formData]);

  const getStatus = () => {
    if (estimatedRisk < 30) return { label: "LOW RISK", class: "active-low" };
    if (estimatedRisk < 70) return { label: "MODERATE RISK", class: "active-med" };
    return { label: "HIGH RISK", class: "active-high" };
  };

  const status = getStatus();

  return (
    <div className="risk-meter-container">
      <div className="risk-meter-header">
        <span style={{ color: 'var(--text-muted)' }}>LIVE CARDIAC RISK ESTIMATION</span>
        <span className="risk-meter-value">{status.label} {estimatedRisk}%</span>
      </div>
      <div className="risk-segments">
        <div className={`risk-segment ${estimatedRisk > 0 ? status.class : ''}`} style={{ flexGrow: estimatedRisk / 10 || 1 }}></div>
        <div className="risk-segment" style={{ flexGrow: (100 - estimatedRisk) / 10 || 1 }}></div>
      </div>
      <p style={{ fontSize: '0.65rem', color: 'var(--text-muted)', marginTop: '0.75rem' }}>
        * Visual estimation based on provided metrics. Run full analysis for neural confirmation.
      </p>
    </div>
  );
}
