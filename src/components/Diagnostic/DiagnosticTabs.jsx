import { Link, useLocation } from "react-router-dom";

export default function DiagnosticTabs() {
  const location = useLocation();

  const tabs = [
    { label: "Diabetes", path: "/predict/diabetes" },
    { label: "Heart Disease", path: "/predict/heart" },
    { label: "Liver Disease", path: "/predict/liver" },
  ];

  return (
    <div className="diag-tabs">
      {tabs.map((tab, idx) => (
        <Link 
          key={idx} 
          to={tab.path} 
          className={`diag-tab ${location.pathname === tab.path ? 'active' : ''}`}
        >
          {tab.label}
        </Link>
      ))}
    </div>
  );
}
