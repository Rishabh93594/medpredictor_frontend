import React from 'react';
import DashboardLayout from "../components/Dashboard/DashboardLayout";
import { AccuracyCard, UptimeCard, PredictionsCard } from "../components/Admin/AdminStats";
import UserManagement from "../components/Admin/UserManagement";
import SystemLogs from "../components/Admin/SystemLogs";

export default function AdminPanel() {
  return (
    <DashboardLayout>
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
