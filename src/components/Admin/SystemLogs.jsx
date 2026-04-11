import React from 'react';

const logs = [
  { 
    title: 'Latency Spike Detected', 
    desc: 'Node #US-EAST-1 response time exceeded 500ms.', 
    time: '12:04', 
    type: 'alert',
    color: '#ff4d4d',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
  },
  { 
    title: 'Model Retrained', 
    desc: 'Liver-AI-v4 successful synchronization completed.', 
    time: '11:58', 
    type: 'success',
    color: 'var(--primary)',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 4v6h-6"></path><path d="M1 20v-6h6"></path><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg>
  },
  { 
    title: 'New User Access', 
    desc: "IP 192.168.1.45 granted 'Cardiology' permissions.", 
    time: '11:32', 
    type: 'info',
    color: '#7494EA',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
  },
  { 
    title: 'DB Maintenance', 
    desc: "Automatic vacuum started on 'PatientRecords'.", 
    time: '10:15', 
    type: 'maintenance',
    color: '#EAB308',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>
  }
];

export default function SystemLogs() {
  return (
    <div className="glass-card" style={{ padding: '2rem 1.5rem', display: 'flex', flexDirection: 'column', height: '100%' }}>
      <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '2rem' }}>Real-time Logs</h3>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', flexGrow: 1 }}>
        {logs.map((log, idx) => (
          <div key={idx} style={{ 
            display: 'flex', 
            gap: '1.25rem', 
            background: 'rgba(16, 23, 38, 0.4)', 
            padding: '1.25rem', 
            borderRadius: '16px',
            borderLeft: `4px solid ${log.color}`,
            position: 'relative'
          }}>
            <div style={{ 
              width: '36px', 
              height: '36px', 
              borderRadius: '8px', 
              background: `${log.color}20`, 
              color: log.color,
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              flexShrink: 0
            }}>
              {log.icon}
            </div>
            <div style={{ flexGrow: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.25rem' }}>
                <h4 style={{ fontSize: '0.9rem', fontWeight: '700' }}>{log.title}</h4>
                <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: '600' }}>{log.time}</span>
              </div>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>{log.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <button className="btn" style={{ 
        marginTop: '2.5rem', 
        background: 'rgba(255, 255, 255, 0.02)', 
        border: '1px solid var(--border)', 
        color: 'var(--text-muted)', 
        fontSize: '0.7rem', 
        textTransform: 'uppercase', 
        letterSpacing: '0.1em',
        width: '100%',
        justifyContent: 'center',
        padding: '1rem'
      }}>
        View Full System History
      </button>
    </div>
  );
}
