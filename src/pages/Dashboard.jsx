import DashboardLayout from "../components/Dashboard/DashboardLayout";
import OverviewStats from "../components/Dashboard/OverviewStats";
import AccuracyTrends from "../components/Dashboard/AccuracyTrends";
import ActivityFeed from "../components/Dashboard/ActivityFeed";
import PriorityScreenings from "../components/Dashboard/PriorityScreenings";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="overview-header">
        <div className="overview-title">
          <h1>Clinical Overview</h1>
          <p>Real-time predictive analytics and patient wellness monitoring.</p>
        </div>
        <div className="overview-actions">
          <button className="btn btn-outline">Generate Report</button>
          <button className="btn btn-primary">New Screening</button>
        </div>
      </div>

      <OverviewStats />

      <div className="dash-grid">
        <AccuracyTrends />
        <ActivityFeed />
      </div>

      <PriorityScreenings />

      {/* Floating Action Button (Teal Plus) */}
      <button 
        className="btn btn-primary" 
        style={{ 
          position: 'fixed', 
          bottom: '2rem', 
          right: '2rem', 
          width: '56px', 
          height: '56px', 
          borderRadius: '50%', 
          padding: '0', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          boxShadow: '0 10px 25px var(--primary-glow)',
          zIndex: 1000
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
      </button>
    </DashboardLayout>
  );
}