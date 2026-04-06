export default function ArchiveActions() {
  return (
    <div className="archive-sidebar">
      <div className="archive-action-card">
        <div className="archive-icon-text">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 8v13H3V8"></path><path d="M1 3h22v5H1V3z"></path><path d="M10 12h4"></path></svg>
          Archive older than 1yr
        </div>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
      </div>

      <div className="archive-action-card">
        <div className="archive-icon-text">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
          Backup History Logs
        </div>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
      </div>

      <div className="storage-widget glass-card">
        <div className="storage-header">
          <span>Cloud Storage</span>
          <span>4.2GB / 10GB</span>
        </div>
        <div className="progress-track">
          <div className="progress-fill" style={{ width: '42%' }}></div>
        </div>
      </div>
    </div>
  );
}
