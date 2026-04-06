import { useState, useEffect } from "react";
import axios from "axios";

export default function PriorityScreenings() {
  const [screenings, setScreenings] = useState([]);
  const [loading, setLoading] = useState(true);

  const getInitials = (name) => {
    if (!name) return "P";
    return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
  };

  useEffect(() => {
    const fetchHighRisk = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("http://localhost:5000/api/predict/history?risk=high&limit=5", {
          headers: { authorization: token }
        });
        
        const mappedData = res.data.map(item => ({
          name: item.patientName || "Anonymous Patient",
          initials: getInitials(item.patientName || "Anonymous Patient"),
          id: `#MP-${item._id?.slice(-5) || "00000"}`,
          type: item.diseaseType.charAt(0).toUpperCase() + item.diseaseType.slice(1),
          confidence: Math.round(item.probability * 100),
          status: item.risk
        }));
        
        setScreenings(mappedData);
      } catch (error) {
        console.error("Failed to fetch priority screenings", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHighRisk();
  }, []);

  return (
    <div className="table-card glass-card">
      <div className="table-header">
        <h3>Priority Screenings</h3>
        <div className="table-actions" style={{ display: 'flex', gap: '1.5rem' }}>
          <button className="btn-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="21" y1="4" x2="14" y2="4"></line><line x1="10" y1="4" x2="3" y2="4"></line><line x1="21" y1="12" x2="12" y2="12"></line><line x1="8" y1="12" x2="3" y2="12"></line><line x1="21" y1="20" x2="16" y2="20"></line><line x1="12" y1="20" x2="3" y2="20"></line><line x1="14" y1="2" x2="14" y2="6"></line><line x1="8" y1="10" x2="8" y2="14"></line><line x1="16" y1="18" x2="16" y2="22"></line></svg>
          </button>
        </div>
      </div>

      <table className="dash-table">
        <thead>
          <tr>
            <th>Patient Name</th>
            <th>ID Reference</th>
            <th>Diagnosis Type</th>
            <th>Confidence</th>
            <th>Risk Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {screenings.length > 0 ? screenings.map((row, idx) => (
            <tr key={idx}>
              <td>
                <div className="patient-info">
                  <div className="patient-avatar-sm">{row.initials}</div>
                  <span>{row.name}</span>
                </div>
              </td>
              <td className="id-cell">{row.id}</td>
              <td>{row.type}</td>
              <td>
                <div className="confidence-bar-container">
                  <div className="confidence-bar-bg">
                    <div 
                      className="confidence-bar-fill" 
                      style={{ 
                        width: `${row.confidence}%`,
                        background: (row.status?.toLowerCase().includes('high') || row.status?.toLowerCase().includes('critical')) ? '#ff4d4d' : 'var(--primary)',
                        boxShadow: (row.status?.toLowerCase().includes('high') || row.status?.toLowerCase().includes('critical')) ? '0 0 10px rgba(246, 2, 2, 0.3)' : '0 0 10px var(--primary-glow)'
                      }}
                    ></div>
                  </div>
                  <span className="confidence-value">{row.confidence}%</span>
                </div>
              </td>
              <td>
                <span className={`badge-risk ${(row.status?.toLowerCase().includes('high') || row.status?.toLowerCase().includes('critical')) ? 'badge-critical' : 'badge-stable'}`}>
                  {row.status}
                </span>
              </td>
              <td>
                <button className="btn-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
                </button>
              </td>
            </tr>
          )) : (
            <tr>
              <td colSpan="6" style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-muted)' }}>
                No priority clinical flags detected.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
