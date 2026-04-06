import { useState, useEffect } from "react";
import axios from "axios";

export default function ActivityFeed() {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);

  const getFormatData = (item) => {
    const isHighRisk = item.risk?.toLowerCase().includes("high") || item.risk?.toLowerCase().includes("critical");
    
    const configs = {
      heart: {
        color: isHighRisk ? "#ff4d4d" : "#2DD4BF",
        icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.7 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.7l1 1L12 21.2l7.8-7.8 1-1a5.5 5.5 0 0 0 0-7.8z"></path></svg>
      },
      diabetes: {
        color: isHighRisk ? "#ff4d4d" : "#7494EA",
        icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
      },
      liver: {
        color: isHighRisk ? "#ff4d4d" : "#fbbf24",
        icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
      }
    };

    const config = configs[item.diseaseType] || configs.diabetes;
    
    return {
      name: item.patientName || "Anonymous Patient",
      type: `${item.diseaseType.charAt(0).toUpperCase() + item.diseaseType.slice(1)}: ${item.risk}`,
      time: new Date(item.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      icon: config.icon,
      color: config.color
    };
  };

  useEffect(() => {
    const fetchRecent = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("http://localhost:5000/api/predict/history?limit=4", {
          headers: { authorization: token }
        });
        setActivities(res.data.map(getFormatData));
      } catch (error) {
        console.error("Failed to fetch activity feed", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecent();
  }, []);

  return (
    <div className="activity-card glass-card">
      <div className="activity-header">
        <h3>Recent Activity</h3>
        <button className="forgot-link">View All</button>
      </div>

      <div className="activity-list">
        {activities.length > 0 ? activities.map((item, idx) => (
          <div key={idx} className="activity-item">
            <div className="activity-icon-sm" style={{ background: `${item.color}20`, color: item.color }}>
              {item.icon}
            </div>
            <div className="activity-info">
              <h4>{item.name}</h4>
              <p>{item.type}</p>
              <span className="activity-time">{item.time}</span>
            </div>
          </div>
        )) : (
          <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-muted)' }}>
            No recent clinical activity.
          </div>
        )}
      </div>

      <div className="ai-suggestion-box">
        <div className="ai-label">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
          AI Suggestion
        </div>
        <p className="ai-text">
          {activities.length > 0 
            ? `Predictive analysis is active. ${activities.length} new records processed in this session.`
            : "Awaiting new diagnostic input for real-time risk assessment."}
        </p>
      </div>
    </div>
  );
}
