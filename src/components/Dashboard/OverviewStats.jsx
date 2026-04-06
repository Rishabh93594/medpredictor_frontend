import { useState, useEffect } from "react";
import axios from "axios";

export default function OverviewStats() {
  const [stats, setStats] = useState({
    totalPatients: 842,
    predictionsMade: 1200,
    highRiskAlerts: 14
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("http://localhost:5000/api/predict/stats", {
          headers: { authorization: token }
        });
        setStats(res.data);
      } catch (error) {
        console.error("Failed to fetch dashboard stats", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="stats-row">
      <div className="stat-card glass-card">
        <div className="stat-header">
          <div className="stat-icon-bg">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
          </div>
          <span className="stat-trend">+12% vs last month</span>
        </div>
        <span className="stat-label">Total Patients</span>
        <span className="stat-value">{stats.totalPatients.toLocaleString()}</span>
      </div>

      <div className="stat-card glass-card">
        <div className="stat-header">
          <div className="stat-icon-bg">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
          </div>
          <span className="stat-trend alt">Auto-Sync Active</span>
        </div>
        <span className="stat-label">Predictions Made</span>
        <span className="stat-value">{stats.predictionsMade.toLocaleString()}</span>
      </div>

      <div className="stat-card glass-card">
        <div className="stat-header">
          <div className="stat-icon-bg" style={{ color: '#ff4d4d', background: 'rgba(246, 2, 2, 0.1)' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
          </div>
          <span className="stat-trend warning">Action Required</span>
        </div>
        <span className="stat-label">High Risk Alerts</span>
        <span className="stat-value" style={{ color: '#ff4d4d' }}>{stats.highRiskAlerts}</span>
      </div>
    </div>
  );
}
