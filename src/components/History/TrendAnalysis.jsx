export default function TrendAnalysis({ count = 0 }) {
  return (
    <div className="trend-analysis-card glass-card">
      <div className="ai-label">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
        System Trend Analysis
      </div>
      <p className="ai-text">
        Patient history indicates a 14% increase in moderate risk Cardiovascular detections over the last 30 days. 
        Consider reviewing preventive screening protocols for the geriatric demographic (ages 65+).
      </p>

      <div className="trend-metrics">
        <div className="trend-stat">
          <span className="trend-stat-label">TOTAL SCANS</span>
          <span className="trend-stat-value">{1429 + count}</span>
        </div>
        <div className="trend-stat">
          <span className="trend-stat-label">ACCURACY AVG</span>
          <span className="trend-stat-value">98.4%</span>
        </div>
      </div>
    </div>
  );
}
