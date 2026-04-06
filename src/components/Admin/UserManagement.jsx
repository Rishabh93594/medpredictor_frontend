import React from 'react';

const users = [
  { 
    name: 'Dr. Sarah Miller', 
    email: 's.miller@medpredictor.io', 
    role: 'Cardiology Head', 
    status: 'Online', 
    lastActive: '2 mins ago',
    initials: 'SM'
  },
  { 
    name: 'James Wilson', 
    email: 'j.wilson@healthlink.com', 
    role: 'Data Scientist', 
    status: 'Online', 
    lastActive: '45 mins ago',
    initials: 'JW'
  },
  { 
    name: 'Elena Huang', 
    email: 'e.huang@clinic.org', 
    role: 'Registrar', 
    status: 'Offline', 
    lastActive: '3 days ago',
    initials: 'EH'
  }
];

export default function UserManagement() {
  return (
    <div className="glass-card" style={{ padding: '0', overflow: 'hidden' }}>
      <div style={{ padding: '2rem 2.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h3 style={{ fontSize: '1.25rem', fontWeight: '700' }}>User Management</h3>
        <button className="btn btn-primary" style={{ fontSize: '0.8rem', padding: '0.6rem 1.2rem' }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line></svg>
          Provision New Account
        </button>
      </div>

      <table className="dash-table">
        <thead>
          <tr>
            <th>User / Practitioner</th>
            <th>Access Level</th>
            <th>Status</th>
            <th>Last Active</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, idx) => (
            <tr key={idx}>
              <td>
                <div className="patient-info">
                  <div className="patient-avatar-sm" style={{ background: 'var(--bg-deep)', border: '1px solid var(--border)' }}>
                    {user.initials}
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontWeight: '700', fontSize: '0.9rem' }}>{user.name}</span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{user.email}</span>
                  </div>
                </div>
              </td>
              <td>
                <span className="badge-clinical" style={{ 
                  background: 'rgba(255, 255, 255, 0.05)', 
                  color: 'var(--text-main)',
                  border: '1px solid var(--border)',
                  fontSize: '0.65rem'
                }}>
                  {user.role}
                </span>
              </td>
              <td>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem' }}>
                  <div className="status-dot" style={{ 
                    background: user.status === 'Online' ? 'var(--primary)' : 'var(--text-muted)',
                    boxShadow: user.status === 'Online' ? '0 0 8px var(--primary)' : 'none'
                  }}></div>
                  {user.status}
                </div>
              </td>
              <td style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                {user.lastActive}
              </td>
              <td>
                <button className="notif-btn" style={{ padding: '0.5rem' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{ padding: '1.5rem 2.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--border)' }}>
        <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Showing 3 of 124 users</span>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button className="page-btn nav">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
          </button>
          <button className="page-btn nav">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </button>
        </div>
      </div>
    </div>
  );
}
