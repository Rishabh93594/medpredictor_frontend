import React, { useState } from 'react';
import DashboardLayout from "../components/Dashboard/DashboardLayout";

export default function Settings() {
  const [activeTab, setActiveTab] = useState('clinical');
  const [threshold, setThreshold] = useState(85);

  const tabs = [
    { id: 'clinical', label: 'Clinical Profile', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><rect x="16" y="11" width="8" height="8" rx="2"></rect><path d="M20 13v4M18 15h4"></path></svg> },
    { id: 'ai', label: 'AI Sensitivity', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg> },
    { id: 'security', label: 'Security & HIPAA', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg> },
    { id: 'notifications', label: 'Notifications', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg> }
  ];

  return (
    <DashboardLayout>
      <div className="settings-layout" style={{ display: 'flex', gap: '3rem', minHeight: 'calc(100vh - 100px)', color: '#f8fafc', paddingBottom: '6rem' }}>
        
        {/* Settings Navigation */}
        <div className="settings-nav" style={{ width: '250px', flexShrink: 0 }}>
          <h3 style={{ fontSize: '0.75rem', fontWeight: '800', letterSpacing: '0.1em', color: '#64748b', textTransform: 'uppercase', marginBottom: '1.5rem', marginLeft: '1rem' }}>
            Configuration
          </h3>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }} className="settings-nav-list">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '1rem',
                  borderRadius: '12px',
                  border: 'none',
                  background: activeTab === tab.id ? 'rgba(51, 65, 85, 0.5)' : 'transparent',
                  color: activeTab === tab.id ? '#2dd4bf' : '#94a3b8',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  textAlign: 'left',
                  whiteSpace: 'nowrap'
                }}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Contents Area */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '4rem', maxWidth: '800px' }}>
          
          {/* Clinical Profile */}
          <section id="clinical">
            <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '0.5rem' }}>Clinical Profile</h2>
            <p style={{ color: '#cbd5e1', fontSize: '0.9rem', marginBottom: '2rem' }}>Manage your professional identity and hospital affiliation.</p>
            
            <div className="settings-card" style={{ background: '#1e293b', border: '1px solid rgba(148, 163, 184, 0.1)', borderRadius: '16px', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div className="settings-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontSize: '0.75rem', color: '#5eead4', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: '700' }}>Full Practitioner Name</label>
                  <input className="settings-input" type="text" defaultValue="Elena Vance, M.D." style={{ background: '#0f172a', border: '1px solid rgba(148, 163, 184, 0.2)', padding: '1.2rem', borderRadius: '8px', color: '#f8fafc', fontSize: '0.95rem', outline: 'none' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontSize: '0.75rem', color: '#5eead4', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: '700' }}>Medical License ID</label>
                  <input className="settings-input" type="text" defaultValue="MP-7729-X-2024" style={{ background: '#0f172a', border: '1px solid rgba(148, 163, 184, 0.2)', padding: '1.2rem', borderRadius: '8px', color: '#f8fafc', fontSize: '0.95rem', outline: 'none' }} />
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.75rem', color: '#5eead4', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: '700' }}>Primary Affiliated Hospital</label>
                <div className="settings-input-container" style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: '#0f172a', border: '1px solid rgba(148, 163, 184, 0.2)', padding: '1.2rem', borderRadius: '8px', color: '#f8fafc', transition: 'all 0.2s ease' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2dd4bf" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><path d="M9 22v-4h6v4"></path><path d="M8 6h.01"></path><path d="M16 6h.01"></path><path d="M12 6h.01"></path><path d="M12 10h.01"></path><path d="M12 14h.01"></path><path d="M16 10h.01"></path><path d="M16 14h.01"></path><path d="M8 10h.01"></path><path d="M8 14h.01"></path></svg>
                  <span style={{ fontSize: '0.95rem', fontWeight: '500' }}>St. Jude Medical Research Institute (North Wing)</span>
                </div>
              </div>
            </div>
          </section>

          {/* AI Sensitivity */}
          <section id="ai">
            <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '0.5rem' }}>AI Sensitivity</h2>
            <p style={{ color: '#cbd5e1', fontSize: '0.9rem', marginBottom: '2rem' }}>Calibrate neural network thresholds for diagnostic confidence.</p>
            
            <div className="settings-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              <div className="settings-card" style={{ background: '#1e293b', border: '1px solid rgba(148, 163, 184, 0.1)', borderRadius: '16px', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <span style={{ fontSize: '0.95rem', fontWeight: '600' }}>Risk Alert Threshold</span>
                  <span style={{ fontSize: '1.2rem', fontWeight: '700', color: '#2dd4bf' }}>{threshold}%</span>
                </div>
                
                <div style={{ position: 'relative', margin: '1rem 0' }}>
                  <div style={{
                    position: 'absolute',
                    top: '-30px',
                    left: `calc(${(threshold - 50) * 2}% - 14px)`,
                    background: '#2dd4bf',
                    color: '#0f172a',
                    padding: '2px 6px',
                    borderRadius: '4px',
                    fontSize: '0.75rem',
                    fontWeight: '700',
                    pointerEvents: 'none',
                    transition: 'left 0.1s ease-out'
                  }}>
                    {threshold}%
                  </div>
                  <input 
                    type="range" 
                    min="50" max="100" 
                    value={threshold} 
                    onChange={(e) => setThreshold(e.target.value)}
                    className="threshold-slider"
                    style={{ width: '100%', accentColor: '#2dd4bf', cursor: 'pointer' }}
                  />
                </div>

                <p style={{ fontSize: '0.8rem', color: '#94a3b8', lineHeight: '1.4' }}>
                  Alerts will trigger only when model confidence exceeds this percentage.
                </p>
              </div>

              <div className="settings-card" style={{ background: '#1e293b', border: '1px solid rgba(148, 163, 184, 0.1)', borderRadius: '16px', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <label style={{ fontSize: '0.75rem', color: '#5eead4', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: '700', marginBottom: '0.5rem' }}>Diagnostic Model Engine</label>
                
                <label className="model-select-btn" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'rgba(45, 212, 191, 0.1)', border: '1px solid #2dd4bf', padding: '1rem', borderRadius: '12px', cursor: 'pointer', transition: 'all 0.2s ease' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2dd4bf" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <span style={{ fontSize: '0.95rem', fontWeight: '600', color: '#f8fafc' }}>Neural-Sync v4.2</span>
                      <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>(Default)</span>
                    </div>
                  </div>
                  <div style={{ background: '#2dd4bf', borderRadius: '50%', padding: '0.2rem', display: 'flex' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0f172a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                </label>

                <label className="model-select-btn inactive" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#0f172a', border: '1px solid rgba(148, 163, 184, 0.2)', padding: '1rem', borderRadius: '12px', cursor: 'pointer', transition: 'all 0.2s ease' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <span style={{ fontSize: '0.95rem', fontWeight: '500', color: '#e2e8f0' }}>BioMetric-Deep v2.0</span>
                      <span style={{ fontSize: '0.8rem', color: '#64748b' }}>(Legacy)</span>
                    </div>
                  </div>
                </label>
              </div>
            </div>
          </section>

          {/* Security & HIPAA */}
          <section id="security">
            <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '0.5rem' }}>Security & HIPAA</h2>
            <p style={{ color: '#cbd5e1', fontSize: '0.9rem', marginBottom: '2rem' }}>Data protection compliance and access management.</p>

            <div className="settings-card" style={{ background: '#1e293b', border: '1px solid rgba(148, 163, 184, 0.1)', borderRadius: '16px', display: 'flex', flexDirection: 'column' }}>
              
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '2rem', borderBottom: '1px solid rgba(148, 163, 184, 0.1)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                  <div style={{ background: 'rgba(45, 212, 191, 0.1)', color: '#2dd4bf', padding: '0.8rem', borderRadius: '12px' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '0.2rem' }}>Two-Factor Authentication</h4>
                    <p style={{ fontSize: '0.85rem', color: '#cbd5e1' }}>Require biometric or SMS code for every login.</p>
                  </div>
                </div>
                <div className="toggle-btn active" style={{ width: '48px', height: '24px', background: '#2dd4bf', borderRadius: '24px', position: 'relative', cursor: 'pointer', transition: 'all 0.2s ease' }}>
                  <div style={{ position: 'absolute', top: '2px', right: '2px', width: '20px', height: '20px', background: '#0f172a', borderRadius: '50%' }}></div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '2rem', borderBottom: '1px solid rgba(148, 163, 184, 0.1)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                  <div style={{ background: 'rgba(148, 163, 184, 0.1)', color: '#2dd4bf', padding: '0.8rem', borderRadius: '12px' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '0.2rem' }}>End-to-End Patient Data Encryption</h4>
                    <p style={{ fontSize: '0.85rem', color: '#cbd5e1' }}>AES-256 military-grade encryption status: Active</p>
                  </div>
                </div>
                <span style={{ fontSize: '0.75rem', fontWeight: '700', padding: '0.4rem 0.8rem', background: 'rgba(45, 212, 191, 0.1)', color: '#2dd4bf', borderRadius: '8px', letterSpacing: '0.05em' }}>SECURE</span>
              </div>

              <div style={{ padding: '2rem' }}>
                <label style={{ fontSize: '0.75rem', color: '#5eead4', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: '700', marginBottom: '1.2rem', display: 'block' }}>Recent Session Logs</label>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                      <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#2dd4bf', boxShadow: '0 0 8px rgba(45, 212, 191, 0.5)' }}></div>
                      <span style={{ fontSize: '0.9rem', color: '#f8fafc' }}>Current Session - MacOS Phoenix, AZ</span>
                    </div>
                    <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Today, 14:22</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                      <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#475569' }}></div>
                      <span style={{ fontSize: '0.9rem', color: '#cbd5e1' }}>Terminal Access - iPadOS Santa Clara, CA</span>
                    </div>
                    <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Oct 12, 09:15</span>
                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* Notifications */}
          <section id="notifications">
            <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '0.5rem' }}>Notifications</h2>
            <p style={{ color: '#cbd5e1', fontSize: '0.9rem', marginBottom: '2rem' }}>Alert routing for clinical anomalies.</p>

            <div className="settings-card" style={{ background: '#1e293b', border: '1px solid rgba(148, 163, 184, 0.1)', borderLeft: '4px solid #ef4444', borderRadius: '16px', padding: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                <div style={{ color: '#ef4444' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                </div>
                <div>
                  <h4 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '0.2rem' }}>Critical High-Risk Alerts</h4>
                  <p style={{ fontSize: '0.85rem', color: '#cbd5e1' }}>Instant push notification for risks above 90% confidence.</p>
                </div>
              </div>
              <div className="toggle-btn inactive" style={{ width: '48px', height: '24px', background: 'rgba(239, 68, 68, 0.2)', borderRadius: '24px', position: 'relative', cursor: 'pointer', transition: 'all 0.2s ease' }}>
                <div style={{ position: 'absolute', top: '2px', left: '2px', width: '20px', height: '20px', background: '#e2e8f0', borderRadius: '50%' }}></div>
              </div>
            </div>
          </section>

        </div>
      </div>

      {/* Floating Save Button */}
      <button className="settings-save-btn" style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        background: 'rgba(45, 212, 191, 0.95)',
        backdropFilter: 'blur(8px)',
        color: '#0f172a',
        border: 'none',
        borderRadius: '30px',
        padding: '1rem 2rem',
        fontSize: '1rem',
        fontWeight: '700',
        display: 'flex',
        alignItems: 'center',
        gap: '0.8rem',
        boxShadow: '0 10px 25px rgba(45, 212, 191, 0.4)',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        zIndex: 100
      }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline></svg>
        Save All Changes
      </button>

      {/* Embedded style for enhanced interactions and responsiveness */}
      <style>{`
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: transparent;
        }
        ::-webkit-scrollbar-thumb {
          background: #334155;
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #475569;
        }
        
        .settings-input {
          transition: all 0.2s ease;
        }
        .settings-input:focus {
          border-color: #2dd4bf !important;
          box-shadow: 0 0 0 3px rgba(45, 212, 191, 0.2) !important;
          background: #1e293b !important;
        }

        .settings-input-container:hover {
          border-color: #475569 !important;
          background: #1e293b !important;
        }

        .settings-card {
           transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .settings-card:hover {
           transform: translateY(-2px);
           box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
        }

        .model-select-btn.inactive:hover {
          border-color: #475569 !important;
          background: #1e293b !important;
        }

        .toggle-btn:hover {
          opacity: 0.8;
        }

        .settings-save-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 35px rgba(45, 212, 191, 0.5) !important;
          background: #2dd4bf !important;
        }

        @media (max-width: 768px) {
          .settings-layout {
            flex-direction: column !important;
          }
          .settings-nav {
            width: 100% !important;
          }
          .settings-nav-list {
            flex-direction: row !important;
            overflow-x: auto;
            padding-bottom: 0.5rem;
          }
          .settings-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </DashboardLayout>
  );
}
