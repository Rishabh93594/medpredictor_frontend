import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import DashboardLayout from "../components/Dashboard/DashboardLayout";
import DiagnosticTabs from "../components/Diagnostic/DiagnosticTabs";
import DiagnosticInputForm from "../components/Diagnostic/DiagnosticInputForm";
import InsightSidebar from "../components/Diagnostic/InsightSidebar";
import ClinicalBadges from "../components/Diagnostic/ClinicalBadges";

export default function DiabetesPredict() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [recentHistory, setRecentHistory] = useState([]);

  const fetchHistory = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get("http://localhost:5000/api/predict/history", {
        headers: { authorization: token },
      });
      // Filter for diabetes only if needed, but showing all for history
      setRecentHistory(res.data.filter(p => p.diseaseType === "diabetes"));
    } catch (error) {
      console.error("Failed to fetch history:", error);
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
        "http://localhost:5000/api/predict",
        {
          diseaseType: "diabetes",
          inputData: numericData,
        },
        {
          headers: { authorization: token },
        }
      );
      
      // Update local history
      const newPrediction = res.data.data;
      setRecentHistory([newPrediction, ...recentHistory]);
      
      // Navigate to full results page
      navigate("/prediction-result", { 
        state: { 
          resultData: { 
            ...newPrediction, 
            diseaseType: "diabetes" 
          } 
        } 
      });
      
    } catch (error) {
      alert(error.response?.data?.message || "Clinical analysis failed. Please check network protocols.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <DashboardLayout>
      <div className="overview-header">
        <div className="overview-title">
          <h1>Diabetes Prediction</h1>
        </div>
      </div>

      <DiagnosticTabs />

      <div className="diag-grid">
        <div className="diag-main-column">
          <DiagnosticInputForm onSubmit={handlePredict} loading={loading} />
          <ClinicalBadges />
        </div>

        <InsightSidebar history={recentHistory} module="diabetes" />
      </div>
    </DashboardLayout>
  );
}