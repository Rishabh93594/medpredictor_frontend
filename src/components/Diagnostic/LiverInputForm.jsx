import { useState } from "react";

export default function LiverInputForm({ onSubmit, loading }) {
  const [formData, setFormData] = useState({
    Age: "45",
    Gender: "1",
    Total_Bilirubin: "0.7",
    Direct_Bilirubin: "0.1",
    Alkaline_Phosphotase: "187",
    Alamine_Aminotransferase: "16",
    Aspartate_Aminotransferase: "18",
    Total_Proteins: "6.8",
    Albumin: "3.3",
    Albumin_and_Globulin_Ratio: "0.9",
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

  const fields = [
    { label: "Total Bilirubin", name: "Total_Bilirubin", placeholder: "0.7" },
    { label: "Direct Bilirubin", name: "Direct_Bilirubin", placeholder: "0.1" },
    { label: "Alkaline Phosphatase", name: "Alkaline_Phosphotase", placeholder: "187" },
    { label: "Alamine Aminotransferase", name: "Alamine_Aminotransferase", placeholder: "16" },
    { label: "Aspartate Aminotransferase", name: "Aspartate_Aminotransferase", placeholder: "18" },
    { label: "Total Proteins", name: "Total_Proteins", placeholder: "6.8" },
    { label: "Albumin", name: "Albumin", placeholder: "3.3" },
    { label: "A/G Ratio", name: "Albumin_and_Globulin_Ratio", placeholder: "0.9" },
  ];

  return (
    <div className="diag-form-card glass-card">
      <div className="diag-form-header">
        <div className="diag-title-area">
          <h3>Hepatological Diagnostic Input</h3>
          <p className="user-role">Comprehensive screening of liver enzymes and protein synthesis.</p>
        </div>
        <div className="badge-clinical">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
          Clinical Mode Active
        </div>
      </div>

      <form onSubmit={handlePredict}>
        <div className="diag-input-grid three-col">
          <div className="input-group">
            <label className="input-label" style={{ fontSize: '0.75rem' }}>Age</label>
            <input type="text" name="Age" className="diag-input" value={formData.Age} onChange={handleChange} required />
          </div>
          <div className="input-group">
            <label className="input-label" style={{ fontSize: '0.75rem' }}>Gender</label>
            <select name="Gender" className="diag-input" value={formData.Gender} onChange={handleChange}>
              <option value="1">Male</option>
              <option value="0">Female</option>
            </select>
          </div>
        </div>

        <div className="diag-input-grid" style={{ marginTop: '1.5rem' }}>
          {fields.map((field, idx) => (
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
              />
            </div>
          ))}
        </div>

        <button type="submit" className="btn btn-primary btn-predict" disabled={loading}>
          {loading ? "ANALYSTING HEPATIC MARKERS..." : "Predict Now"}
        </button>
      </form>
    </div>
  );
}
