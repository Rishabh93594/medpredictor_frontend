export default function DashboardHeader() {
  return (
    <header className="dash-header">
      <div className="header-search">
        <svg className="search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
        <input 
          type="text" 
          className="search-input" 
          placeholder="Search patients or diagnostics..." 
        />
      </div>

      <div className="header-actions">
        <button className="notif-btn">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
          <span className="notif-dot"></span>
        </button>

        <div className="user-profile">
          <div className="user-info">
            <span className="user-name">Dr. Aris</span>
            <span className="user-role">Chief Neurologist</span>
          </div>
          <img 
            src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=100&h=100" 
            alt="User Avatar" 
            className="user-avatar"
          />
        </div>
      </div>
    </header>
  );
}
