import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import DashboardLayout from "../components/Dashboard/DashboardLayout";
import DiagnosticTabs from "../components/Diagnostic/DiagnosticTabs";
import LiverInputForm from "../components/Diagnostic/LiverInputForm";
import InsightSidebar from "../components/Diagnostic/InsightSidebar";
import ClinicalBadges from "../components/Diagnostic/ClinicalBadges";

export default function LiverPredict() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [recentHistory, setRecentHistory] = useState([]);

  const fetchHistory = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get("http://localhost:5000/api/predict/history", {
        headers: { authorization: token },
      });
      setRecentHistory(res.data.filter(p => p.diseaseType === "liver"));
    } catch (error) {
      console.error("Failed to fetch liver history:", error);
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
          diseaseType: "liver",
          inputData: numericData,
        },
        {
          headers: { authorization: token },
        }
      );
      
      const newPrediction = res.data.data;
      // Navigate to full results page
      navigate("/prediction-result", { 
        state: { 
          resultData: { 
            ...newPrediction, 
            diseaseType: "liver" 
          } 
        } 
      });
      
    } catch (error) {
      alert("Liver analysis failed. Biochemical data out of range.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <DashboardLayout>
      <div className="overview-header">
        <div className="overview-title">
          <h1>Liver Disease Prediction</h1>
        </div>
      </div>

      <DiagnosticTabs />

      <div className="diag-grid">
        <div className="diag-main-column">
          <LiverInputForm onSubmit={handlePredict} loading={loading} />
          <ClinicalBadges />
        </div>

        <InsightSidebar history={recentHistory} module="liver" />
      </div>
    </DashboardLayout>
  );
}