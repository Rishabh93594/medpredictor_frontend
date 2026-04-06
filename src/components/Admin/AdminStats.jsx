import React from 'react';

export const AccuracyCard = () => (
  <div className="glass-card" style={{ 
    gridColumn: 'span 2', 
    padding: '2.5rem', 
    display: 'flex', 
    justifyContent: 'space-between', 
    position: 'relative',
    overflow: 'hidden'
  }}>
    <div style={{ zIndex: 1 }}>
      <span className="stat-label" style={{ color: 'var(--primary)', marginBottom: '1.5rem', display: 'block' }}>
        AI Prediction Accuracy
      </span>
      <div style={{ display: 'flex', alignItems: 'baseline', marginBottom: '1.5rem' }}>
        <h1 style={{ fontSize: '4.5rem', fontWeight: '700', lineHeight: '1' }}>99.4</h1>
        <span style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--primary)', marginLeft: '0.5rem' }}>%</span>
      </div>
      <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', maxWidth: '340px', lineHeight: '1.6', marginBottom: '2rem' }}>
        Current real-time accuracy across all diagnostic models including neural networks for Heart and Liver analysis.
      </p>
      <div className="stat-trend" style={{ padding: '0.5rem 1rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
        <span className="pulse-dot" style={{ width: '6px', height: '6px' }}></span>
        +0.2% vs last month
      </div>
    </div>
    
    <div style={{ 
      width: '120px', 
      height: '120px', 
      background: 'rgba(45, 212, 191, 0.05)', 
      borderRadius: '24px', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center' 
    }}>
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="18" y="3" width="4" height="18"></rect>
        <rect x="10" y="8" width="4" height="13"></rect>
        <rect x="2" y="13" width="4" height="8"></rect>
      </svg>
    </div>
  </div>
);

export const UptimeCard = () => (
  <div className="glass-card" style={{ padding: '2rem' }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
      <span className="stat-label">System Uptime</span>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.5 19L19 19C20.1046 19 21 18.1046 21 17C21 15.8954 20.1046 15 19 15L17.3 15C16.582 15 16 14.4173 16 13.7C16 13.0649 16.4594 12.5445 17.0766 12.4239C19.243 12 21 10.1506 21 8C21 5.79086 19.2091 4 17 4C14.7909 4 13 5.79086 13 8"></path>
        <path d="M7 19L5 19C3.89543 19 3 18.1046 3 17C3 15.8954 3.89543 15 5 15L6.7 15C7.41797 15 8 14.4173 8 13.7C8 13.0649 7.54059 12.5445 6.92341 12.4239C4.75704 12 3 10.1506 3 8C3 5.79086 4.79086 4 7 4C9.20914 4 11 5.79086 11 8"></path>
      </svg>
    </div>
    <div style={{ marginBottom: '1.5rem' }}>
      <h2 style={{ fontSize: '2rem', fontWeight: '700' }}>99.99%</h2>
    </div>
    <div className="progress-track" style={{ height: '4px' }}>
      <div className="progress-fill" style={{ width: '99.99%' }}></div>
    </div>
  </div>
);

export const PredictionsCard = () => (
  <div className="glass-card" style={{ padding: '2rem' }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
      <span className="stat-label">Total Predictions</span>
      <div style={{ color: '#EAB308' }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 11V16"></path>
          <path d="M12 8V8.01"></path>
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"></path>
        </svg>
      </div>
    </div>
    <div style={{ marginBottom: '0.5rem' }}>
      <h2 style={{ fontSize: '2rem', fontWeight: '700' }}>124,582</h2>
    </div>
    <p style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>Processed across global nodes</p>
  </div>
);
