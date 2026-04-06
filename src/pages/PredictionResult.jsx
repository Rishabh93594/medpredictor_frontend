import { useLocation, useNavigate } from "react-router-dom";
import DashboardLayout from "../components/Dashboard/DashboardLayout";
import RiskGauge from "../components/Diagnostic/RiskGauge";
import FactorWeighting from "../components/Diagnostic/FactorWeighting";
import TreatmentProtocols from "../components/Diagnostic/TreatmentProtocols";

export default function PredictionResult() {
  const { state } = useLocation();
  const navigate = useNavigate();

  // If no state (direct access), redirect back to dashboard
  if (!state || !state.resultData) {
    setTimeout(() => navigate("/dashboard"), 100);
    return null;
  }

  const { resultData } = state;
  const percentage = Math.round(resultData.probability * 100);
  const risk = resultData.risk || (percentage > 50 ? "High Risk" : "Low Risk");
  const diseaseType = resultData.diseaseType || "diabetes";

  return (
    <DashboardLayout>
      <div className="results-container">
        <div className="results-grid" style={{ position: 'relative' }}>
          <RiskGauge percentage={percentage} risk={risk} />
          <FactorWeighting diseaseType={diseaseType} probability={resultData.probability} />
        </div>

        <TreatmentProtocols risk={risk} />

        <div className="results-footer">
          <div className="specialists-area">
            <div className="avatar-stack">
              <img src="https://i.pravatar.cc/150?u=doc1" alt="Specialist" />
              <img src="https://i.pravatar.cc/150?u=doc2" alt="Specialist" />
              <div className="plus-bubble">+12</div>
            </div>
            <span style={{ fontSize: '0.85rem', fontWeight: '600' }}>Specialists available now for consultation</span>
          </div>

          <div style={{ display: 'flex', gap: '1rem' }}>
            <button className="btn btn-export" style={{ height: '44px' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '0.5rem' }}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
              Download Report
            </button>
            <button className="btn btn-primary" style={{ height: '44px', fontWeight: '700' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none" style={{ marginRight: '0.5rem' }}><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
              Consult Specialist
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
