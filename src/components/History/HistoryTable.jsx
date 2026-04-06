import { useState } from "react";

export default function HistoryTable({ data = [] }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const totalPages = Math.ceil(data.length / itemsPerPage) || 1;
  const currentData = data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const getInitials = (name) => {
    if (!name) return "P";
    return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
  };

  const getDiseaseLabel = (type) => {
    const labels = {
      diabetes: "Diabetes Type II",
      heart: "Cardiovascular",
      liver: "Hepatic Function"
    };
    return labels[type] || type;
  };

  return (
    <div className="table-card glass-card">
      <table className="dash-table">
        <thead>
          <tr>
            <th>Patient Name</th>
            <th>Disease</th>
            <th>Prediction Date</th>
            <th>Risk Level</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentData.length > 0 ? currentData.map((item, idx) => (
            <tr key={idx}>
              <td>
                <div className="patient-info">
                  <div className="patient-avatar-sm">{getInitials(item.patientName || "Guest")}</div>
                  <div className="patient-meta">
                    <span className="user-name">{item.patientName || "Anonymous Patient"}</span>
                    <span className="id-cell" style={{ fontSize: '0.7rem' }}>UID: #MP-{item._id?.slice(-5) || "00000"}</span>
                  </div>
                </div>
              </td>
              <td>{getDiseaseLabel(item.diseaseType)}</td>
              <td>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span>{new Date(item.createdAt).toLocaleDateString()}</span>
                  <span style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>
                    {new Date(item.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              </td>
              <td>
                <div className="prediction-status-bar">
                  <div className={`status-dot status-${item.risk?.toLowerCase().includes("high") ? 'high' : 'low'}`}></div>
                  <span className={`status-${item.risk?.toLowerCase().includes("high") ? 'high' : 'low'}`} style={{ textTransform: 'uppercase', fontSize: '0.75rem' }}>
                    {item.risk || "Low Risk"}
                  </span>
                </div>
              </td>
              <td>
                <span className={`badge ${item.risk?.toLowerCase().includes("high") ? 'badge-critical' : 'badge-stable'}`} style={{ fontSize: '0.7rem' }}>
                  {item.risk?.toLowerCase().includes("high") ? "Clinical Review" : "Completed"}
                </span>
              </td>
              <td>
                <button className="btn-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
                </button>
              </td>
            </tr>
          )) : (
            <tr>
              <td colSpan="6" style={{ textAlign: 'center', padding: '4rem', color: 'var(--text-muted)' }}>
                No historical diagnostic data found for the selected filters.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <div className="pagination-row" style={{ padding: '1.5rem 3rem' }}>
        <span>Showing {currentData.length > 0 ? (currentPage - 1) * itemsPerPage + 1 : 0}-{Math.min(currentPage * itemsPerPage, data.length)} of {data.length} entries</span>
        <div className="pagination-controls">
          <button 
            className="page-btn nav" 
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            disabled={currentPage === 1}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
          </button>
          {[...Array(totalPages)].map((_, i) => (
            <button 
              key={i} 
              className={`page-btn ${currentPage === i + 1 ? 'active' : ''}`}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
          <button 
            className="page-btn nav" 
            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </button>
        </div>
      </div>
    </div>
  );
}
