import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import jsPDF from "jspdf";
import "jspdf-autotable";
import DashboardLayout from "../components/Dashboard/DashboardLayout";
import HistoryFilters from "../components/History/HistoryFilters";
import HistoryTable from "../components/History/HistoryTable";
import TrendAnalysis from "../components/History/TrendAnalysis";
import ArchiveActions from "../components/History/ArchiveActions";

export default function History() {
  const [predictions, setPredictions] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState({
    diseaseType: "all",
    dateRange: "30",
    riskLevel: "all",
    search: ""
  });

  const fetchHistory = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get("http://localhost:5000/api/predict/history", {
        headers: { authorization: token },
      });
      setPredictions(res.data);
      setFilteredData(res.data);
    } catch {
      alert("Failed to load history protocols.");
    } finally {
      setLoading(false);
    }
  };

  const handleClearHistory = async () => {
    if (!window.confirm("Are you sure you want to clear all history records? This action cannot be undone.")) return;
    
    try {
      const token = localStorage.getItem("token");
      await axios.delete("http://localhost:5000/api/predict/history", {
        headers: { authorization: token },
      });
      setPredictions([]);
      setFilteredData([]);
    } catch {
      alert("Failed to clear history.");
    }
  };

  useEffect(() => {
    fetchHistory();
  }, []);

  useEffect(() => {
    let result = [...predictions];

    // Filter by Disease
    if (filter.diseaseType !== "all") {
      result = result.filter(p => p.diseaseType === filter.diseaseType);
    }

    // Filter by Risk
    if (filter.riskLevel !== "all") {
      result = result.filter(p => p.risk === filter.riskLevel);
    }

    // Filter by Search (ID or Category)
    if (filter.search) {
      const searchLower = filter.search.toLowerCase();
      result = result.filter(p => 
        p._id.toLowerCase().includes(searchLower) || 
        p.diseaseType.toLowerCase().includes(searchLower)
      );
    }

    setFilteredData(result);
  }, [filter, predictions]);

  const exportPDF = () => {
    const doc = new jsPDF();
    
    // Add Header
    doc.setFontSize(20);
    doc.setTextColor(45, 212, 191);
    doc.text("MedPredictor Clinical History Report", 14, 22);
    
    doc.setFontSize(10);
    doc.setTextColor(100);
    doc.text(`Generated on: ${new Date().toLocaleString()}`, 14, 30);
    doc.text(`Active Filters: ${filter.diseaseType} / ${filter.riskLevel}`, 14, 35);
    
    // Prepare Table Data
    const tableColumn = ["Patient ID", "Disease Type", "Risk Level", "Probability", "Date"];
    const tableRows = filteredData.map(item => [
      `#MP-${item._id.slice(-5)}`,
      item.diseaseType.toUpperCase(),
      item.risk.toUpperCase(),
      `${(item.probability * 100).toFixed(1)}%`,
      new Date(item.createdAt).toLocaleDateString()
    ]);

    doc.autoTable({
      head: [tableColumn],
      body: tableRows,
      startY: 45,
      theme: 'grid',
      headStyles: { fillColor: [45, 212, 191], textColor: [255, 255, 255] },
      alternateRowStyles: { fillColor: [245, 245, 245] }
    });

    doc.save(`clinical_history_${Date.now()}.pdf`);
  };

  return (
    <DashboardLayout>
      <div className="history-header">
        <div className="history-title-area">
          <h2>Patient History</h2>
          <p className="user-role" style={{ color: 'var(--text-muted)' }}>
            Access clinical prediction logs and historical diagnostic data powered by Clinical Nebula AI.
          </p>
        </div>
        <div className="history-actions">
          <button className="btn btn-export" onClick={exportPDF}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
            Export PDF
          </button>
          <button className="btn btn-clear-history" onClick={handleClearHistory} style={{ background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444', border: '1px solid rgba(239, 68, 68, 0.2)', height: '44px', display: 'flex', alignItems: 'center', gap: '8px', padding: '0 16px', borderRadius: '8px', cursor: 'pointer', transition: 'all 0.3s' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
            Clear All
          </button>
          <Link to="/dashboard" className="btn btn-primary" style={{ height: '44px' }}>
            New Prediction
          </Link>
        </div>
      </div>

      <HistoryFilters filter={filter} setFilter={setFilter} />

      <HistoryTable data={filteredData} />

      <div className="archive-grid">
        <TrendAnalysis count={filteredData.length} />
        <ArchiveActions />
      </div>
    </DashboardLayout>
  );
}