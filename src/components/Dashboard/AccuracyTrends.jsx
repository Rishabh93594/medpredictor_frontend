export default function AccuracyTrends() {
  return (
    <div className="graph-card glass-card">
      <div className="graph-header">
        <div className="graph-info">
          <h3>Prediction Accuracy Trends</h3>
          <p>Screening volume vs accuracy over last 30 days</p>
        </div>
        <button className="btn-select">Last 30 Days</button>
      </div>

      <div className="graph-visual" style={{ height: '240px', position: 'relative' }}>
        <svg width="100%" height="100%" viewBox="0 0 800 200" preserveAspectRatio="none">
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.3" />
              <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
            </linearGradient>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
          
          {/* Soft Grid lines */}
          <line x1="0" y1="50" x2="800" y2="50" stroke="var(--border)" strokeOpacity="0.3" strokeDasharray="2,4" />
          <line x1="0" y1="100" x2="800" y2="100" stroke="var(--border)" strokeOpacity="0.3" strokeDasharray="2,4" />
          <line x1="0" y1="150" x2="800" y2="150" stroke="var(--border)" strokeOpacity="0.3" strokeDasharray="2,4" />

          {/* Wave path */}
          <path 
            d="M0,160 C100,160 150,110 200,110 C250,110 300,140 350,140 C400,140 450,80 500,80 C550,80 600,160 650,160 C700,160 750,110 800,110" 
            fill="url(#waveGradient)" 
          />
          <path 
            d="M0,160 C100,160 150,110 200,110 C250,110 300,140 350,140 C400,140 450,80 500,80 C550,80 600,160 650,160 C700,160 750,110 800,110" 
            fill="none" 
            stroke="var(--primary)" 
            strokeWidth="3" 
            strokeLinecap="round"
            filter="url(#glow)"
          />

          {/* Data points */}
          <circle cx="200" cy="110" r="5" fill="var(--bg-deep)" stroke="var(--primary)" strokeWidth="2.5" />
          <circle cx="350" cy="140" r="5" fill="var(--bg-deep)" stroke="var(--primary)" strokeWidth="2.5" />
          <circle cx="500" cy="80" r="5" fill="var(--bg-deep)" stroke="var(--primary)" strokeWidth="2.5" />
        </svg>

        <div className="graph-x-axis" style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem', padding: '0 0.5rem' }}>
          <span className="user-role">Day 01</span>
          <span className="user-role">Day 07</span>
          <span className="user-role">Day 14</span>
          <span className="user-role">Day 21</span>
          <span className="user-role">Day 30</span>
        </div>
      </div>
    </div>
  );
}
