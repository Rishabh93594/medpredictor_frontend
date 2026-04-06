export default function ClinicalBadges() {
  return (
    <div className="diag-footer-row">
      <div className="clinical-badge-card glass-card">
        <div className="badge-icon-bg">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
        </div>
        <div className="badge-content">
          <span className="badge-text-primary">Neural Confidence</span>
          <span className="badge-text-secondary">
            ML model currently operating at 94.2% accuracy for Type-2 Diabetes.
          </span>
        </div>
      </div>

      <div className="clinical-badge-card glass-card">
        <div className="badge-icon-bg">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
        </div>
        <div className="badge-content">
          <span className="badge-text-primary">HIPAA Compliant</span>
          <span className="badge-text-secondary">
            All data is end-to-end encrypted and clinical records are anonymous.
          </span>
        </div>
      </div>
    </div>
  );
}
