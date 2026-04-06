export default function Stats() {
  const stats = [
    { value: "12M+", label: "DATA POINTS ANALYZED" },
    { value: "450+", label: "HOSPITALS INTEGRATED" },
    { value: "99.8%", label: "PREDICTION ACCURACY" },
    { value: "< 2s", label: "PROCESSING SPEED" }
  ];

  return (
    <section className="section stats">
      <div className="container stats-grid">
        {stats.map((stat, idx) => (
          <div key={idx} className="stat-item">
            <h3 className="stat-value">{stat.value}</h3>
            <p className="stat-label">{stat.label}</p>
          </div>
        ))}
      </div>

      <style>{`
        .stats {
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
          background: rgba(255, 255, 255, 0.01);
          padding: 4rem 0;
        }
        
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
          text-align: center;
        }
        
        @media (max-width: 768px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 3rem;
          }
        }
        
        .stat-value {
          font-size: 2.5rem;
          color: var(--primary);
          margin-bottom: 0.5rem;
          font-weight: 700;
        }
        
        .stat-label {
          font-size: 0.75rem;
          color: var(--text-muted);
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }
      `}</style>
    </section>
  );
}
