import { useState } from "react";

export default function DiagnosticInputForm({ onSubmit, loading }) {
  const [formData, setFormData] = useState({
    Glucose: "",
    BloodPressure: "",
    Insulin: "",
    BMI: "",
    Pregnancies: "0",
    DiabetesPedigreeFunction: "0.45",
    Age: "",
    SkinThickness: "20" // Default for backend consistency
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePredict = (e) => {
    e.preventDefault();
    // Convert strings to numbers for backend
    const numericData = {};
    Object.keys(formData).forEach(key => {
      numericData[key] = parseFloat(formData[key]) || 0;
    });
    onSubmit(numericData);
  };

  const fields = [
    { label: "Glucose (mg/dL)", name: "Glucose", placeholder: "e.g. 120" },
    { label: "Blood Pressure (mmHg)", name: "BloodPressure", placeholder: "e.g. 80" },
    { label: "Insulin (mu U/ml)", name: "Insulin", placeholder: "e.g. 30" },
    { label: "BMI (kg/m²)", name: "BMI", placeholder: "e.g. 24.5" },
  ];

  const subFields = [
    { label: "Pregnancies", name: "Pregnancies", placeholder: "0" },
    { label: "Pedigree", name: "DiabetesPedigreeFunction", placeholder: "0.45" },
    { label: "Age", name: "Age", placeholder: "45" },
  ];

  return (
    <div className="diag-form-card glass-card">
      <div className="diag-form-header">
        <div className="diag-title-area">
          <h3>Patient Diagnostic Input</h3>
          <p className="user-role">Provide clinical biomarkers for high-precision AI analysis.</p>
        </div>
        <div className="badge-clinical">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
          Clinical Mode Active
        </div>
      </div>

      <form onSubmit={handlePredict}>
        <div className="diag-input-grid">
          {fields.map((field, idx) => (
            <div key={idx} className="input-group">
              <div className="input-label-row">
                <label className="input-label" style={{ fontSize: '0.75rem' }}>{field.label}</label>
                <svg className="input-help-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
              </div>
                <input 
                type="text" 
                name={field.name}
                className="diag-input" 
                placeholder={field.placeholder}
                value={formData[field.name]}
                onChange={handleChange}
                required
                aria-label={field.label}
              />
            </div>
          ))}
        </div>

        <div className="diag-input-grid three-col">
          {subFields.map((field, idx) => (
            <div key={idx} className="input-group">
              <label className="input-label" style={{ fontSize: '0.75rem' }}>{field.label}</label>
              <input 
                type="text" 
                name={field.name}
                className="diag-input" 
                placeholder={field.placeholder}
                value={formData[field.name]}
                onChange={handleChange}
                required
                aria-label={field.label}
              />
            </div>
          ))}
        </div>

        <button type="submit" className="btn btn-primary btn-predict" disabled={loading}>
          {loading ? "ANALYZING BIOMARKERS..." : "Predict Now"}
        </button>
      </form>
    </div>
  );
}
