import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import DashboardLayout from "../components/Dashboard/DashboardLayout";
import DiagnosticTabs from "../components/Diagnostic/DiagnosticTabs";
import HeartInputForm from "../components/Diagnostic/HeartInputForm";
import InsightSidebar from "../components/Diagnostic/InsightSidebar";
import ClinicalBadges from "../components/Diagnostic/ClinicalBadges";

export default function HeartPredict() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [recentHistory, setRecentHistory] = useState([]);

  const fetchHistory = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(`${import.meta.env.VITE_API_URL || 'http://localhost:5000'}/api/predict/history`, {
        headers: { authorization: token },
      });
      setRecentHistory(res.data.filter(p => p.diseaseType === "heart"));
    } catch (error) {
      console.error("Failed to fetch heart history:", error);
    }
  };

  useEffect(() => {
    fetchHistory();
  }, []);

  const handlePredict = async (numericData) => {
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL || 'http://localhost:5000'}/api/predict`,
        {
          diseaseType: "heart",
          inputData: numericData,
        },
        {
          headers: { authorization: token },
        }
      );
      
      const newPrediction = res.data.data;
      setRecentHistory([newPrediction, ...recentHistory]);
      // Navigate to full results page
      navigate("/prediction-result", { 
        state: { 
          resultData: { 
            ...newPrediction, 
            diseaseType: "heart" 
          } 
        } 
      });
      
    } catch (error) {
      alert("Cardiac analysis failed. Protocol mismatch.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <DashboardLayout>
      <div className="overview-header">
        <div className="overview-title">
          <h1>Heart Disease Prediction</h1>
        </div>
      </div>

      <DiagnosticTabs />

      <div className="diag-grid">
        <div className="diag-main-column">
          <HeartInputForm onSubmit={handlePredict} loading={loading} />
          <ClinicalBadges />
        </div>

        <InsightSidebar history={recentHistory} module="heart" />
      </div>
    </DashboardLayout>
  );
}