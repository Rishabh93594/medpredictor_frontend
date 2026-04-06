export default function HistoryFilters({ filter, setFilter }) {
  const handleChange = (e) => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
  };

  return (
    <div className="history-filters">
      <div className="filter-group">
        <label className="filter-label">Disease Type</label>
        <select 
          name="diseaseType" 
          className="filter-select"
          value={filter.diseaseType}
          onChange={handleChange}
        >
          <option value="all">All Diseases</option>
          <option value="diabetes">Diabetes Type II</option>
          <option value="heart">Cardiovascular</option>
          <option value="liver">Hepatic Function</option>
        </select>
      </div>

      <div className="filter-group">
        <label className="filter-label">Date Range</label>
        <select 
          name="dateRange" 
          className="filter-select"
          value={filter.dateRange}
          onChange={handleChange}
        >
          <option value="30">Last 30 Days</option>
          <option value="60">Last 60 Days</option>
          <option value="90">Last 90 Days</option>
        </select>
      </div>

      <div className="filter-group">
        <label className="filter-label">Risk Level</label>
        <select 
          name="riskLevel" 
          className="filter-select"
          value={filter.riskLevel}
          onChange={handleChange}
        >
          <option value="all">All Levels</option>
          <option value="High Risk">High Risk</option>
          <option value="Moderate Risk">Moderate Risk</option>
          <option value="Low Risk">Low Risk</option>
        </select>
      </div>

      <div className="filter-group">
        <label className="filter-label">Search Keyword</label>
        <div className="filter-input-wrapper">
          <input 
            type="text" 
            name="search"
            className="filter-search"
            placeholder="Filter rows by Patient ID or name..."
            value={filter.search}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
}
