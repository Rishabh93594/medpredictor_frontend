import { useState } from "react";
import RiskMeter from "./RiskMeter";

export default function HeartInputForm({ onSubmit, loading }) {
  const [formData, setFormData] = useState({
    age: "45",
    sex: "1",
    cp: "0",
    trestbps: "120",
    chol: "240",
    fbs: "0",
    restecg: "0",
    thalach: "150",
    exang: "0",
    oldpeak: "0.5",
    slope: "1",
    ca: "0",
    thal: "1",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePredict = (e) => {
    e.preventDefault();
    const numericData = {};
    Object.keys(formData).forEach(key => {
      numericData[key] = parseFloat(formData[key]) || 0;
    });
    onSubmit(numericData);
  };

  const groups = [
    {
      title: "🫀 Vital Signs",
      fields: [
        { label: "Resting BP (mmHg)", name: "trestbps", placeholder: "e.g. 120", helper: "Normal BP: 90–120 mmHg" },
        { label: "Cholesterol (mg/dl)", name: "chol", placeholder: "e.g. 240", helper: "Ideal Level: < 200 mg/dl" },
        { label: "Max Heart Rate", name: "thalach", placeholder: "e.g. 150", helper: "Target: 220 - Age" },
      ]
    },
    {
      title: "📊 ECG & Test Results",
      fields: [
        { label: "Resting ECG", name: "restecg", type: "select", options: [
          { val: "0", lab: "Normal" },
          { val: "1", lab: "ST-T Abnormality" },
          { val: "2", lab: "Hypertrophy" }
        ], helper: "Electrocardiographic rhythm status" },
        { label: "ST Depression (Oldpeak)", name: "oldpeak", placeholder: "e.g. 0.5", helper: "ECG slope measurement" },
        { label: "Exercise Angina?", name: "exang", type: "select", options: [
          { val: "0", lab: "No / Stable" },
          { val: "1", lab: "Yes / Induced" }
        ], helper: "Induced by physical exertion" },
      ]
    },
    {
      title: "👤 Patient Information",
      fields: [
        { label: "Age", name: "age", placeholder: "45", helper: "Patient chronological age" },
        { label: "Biological Sex", name: "sex", type: "select", options: [
          { val: "1", lab: "Male" },
          { val: "0", lab: "Female" }
        ], helper: "Clinical demographic marker" },
        { label: "Chest Pain Type", name: "cp", type: "select", options: [
          { val: "0", lab: "Typical Angina" },
          { val: "1", lab: "Atypical Angina" },
          { val: "2", lab: "Non-anginal Pain" },
          { val: "3", lab: "Asymptomatic" }
        ], helper: "Clinical pain classification" },
      ]
    }
  ];

  return (
    <div className="diag-form-card glass-card" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="ecg-bg"></div>
      
      <div className="diag-form-header" style={{ position: 'relative', zIndex: 1 }}>
        <div className="diag-title-area">
          <h3>Cardiovascular Diagnostic Input</h3>
          <p className="user-role">High-precision AI analysis for cardiac pattern recognition.</p>
        </div>
        <div className="badge-clinical">
          <svg className="accent-heart animate-heartbeat" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
          Clinical Mode Active
        </div>
      </div>

      <form onSubmit={handlePredict} style={{ position: 'relative', zIndex: 1 }}>
        {groups.map((group, gIdx) => (
          <div key={gIdx} className="diag-row-group">
            <h4 className="diag-row-header">{group.title}</h4>
            <div className="diag-input-grid three-col">
              {group.fields.map((field, fIdx) => (
                <div key={fIdx} className="input-group">
                  <label className="input-label" style={{ fontSize: '0.7rem' }}>{field.label}</label>
                  {field.type === "select" ? (
                    <select name={field.name} className="diag-input" value={formData[field.name]} onChange={handleChange}>
                      {field.options.map((opt, oIdx) => (
                        <option key={oIdx} value={opt.val}>{opt.lab}</option>
                      ))}
                    </select>
                  ) : (
                    <input type="text" name={field.name} className="diag-input" placeholder={field.placeholder} value={formData[field.name]} onChange={handleChange} required />
                  )}
                  <span className="input-helper">{field.helper}</span>
                </div>
              ))}
            </div>
          </div>
        ))}

        <RiskMeter formData={formData} />

        <button type="submit" className="btn btn-cardiac btn-predict animate-heartbeat" disabled={loading}>
          {loading ? "ANALYZING CARDIAC PATTERNS..." : "Run Heart Risk Analysis"}
        </button>
      </form>
    </div>
  );
}
