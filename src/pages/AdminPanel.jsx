import React from 'react';
import DashboardLayout from "../components/Dashboard/DashboardLayout";
import { AccuracyCard, UptimeCard, PredictionsCard } from "../components/Admin/AdminStats";
import UserManagement from "../components/Admin/UserManagement";
import SystemLogs from "../components/Admin/SystemLogs";

export default function AdminPanel() {
  return (
    <DashboardLayout>
      <div className="overview-header">
        <div className="overview-title">
          <h1>System Control Center</h1>
          <p>Global administrative hub for model orchestration and health monitoring.</p>
        </div>
        <div className="overview-actions">
          <button className="btn btn-outline">System Diagnostics</button>
          <button className="btn btn-primary" style={{ background: 'linear-gradient(135deg, var(--primary) 0%, #177065 100%)', border: 'none' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
            Cluster Settings
          </button>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem', marginBottom: '3rem' }}>
        <AccuracyCard />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <UptimeCard />
          <PredictionsCard />
        </div>
      </div>

      <div className="dash-grid" style={{ gridTemplateColumns: '2fr 1fr', alignItems: 'start' }}>
        <UserManagement />
        <SystemLogs />
      </div>
    </DashboardLayout>
  );
}
