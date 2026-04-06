export default function Footer() {
  return (
    <footer className="footer section">
      <div className="container footer-grid">
        <div className="footer-brand">
          <div className="logo-section">
            <h3 className="brand-title">Med<span className="text-primary">Predictor</span></h3>
            <p className="brand-tagline">Redefining clinical intelligence through AI-driven diagnostics and predictive modeling.</p>
          </div>
          <div className="social-links">
            <button className="social-btn">
              <svg fill="currentColor" width="18" height="18" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
            </button>
            <button className="social-btn">
              <svg fill="currentColor" width="18" height="18" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
            </button>
            <button className="social-btn">
              <svg fill="currentColor" width="18" height="18" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 18.361c-.328.248-1.559 1.139-4.066 1.139-2.508 0-3.738-.891-4.066-1.139-1.233-.933-1.634-2.316-1.634-3.415 0-1.099.401-2.482 1.634-3.415.328-.248 1.559-1.139 4.066-1.139 2.507 0 3.738.891 4.066 1.139 1.233.933 1.634 2.316 1.634 3.415 0 1.099-.401 2.482-1.634 3.415z"/></svg>
            </button>
          </div>
        </div>

        <div className="footer-links-group">
          <div className="link-column">
            <h4 className="column-title">Predictive Models</h4>
            <ul className="column-list">
              <li><a href="/diabetes-predict">Diabetes Engine</a></li>
              <li><a href="/heart-predict">Cardiac Analysis</a></li>
              <li><a href="/liver-predict">Hepatology Metrics</a></li>
              <li><a href="/history">History Tracking</a></li>
            </ul>
          </div>
          <div className="link-column">
            <h4 className="column-title">Company</h4>
            <ul className="column-list">
              <li><a href="/about">About Us</a></li>
              <li><a href="/press">Ethics & AI</a></li>
              <li><a href="/privacy">Data Privacy</a></li>
              <li><a href="/contact">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container bottom-content">
          <p className="copyright">© 2026 MedPredictor Systems Co. All Rights Reserved.</p>
          <div className="bottom-links">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
          </div>
        </div>
      </div>

      <style>{`
        .footer {
          padding-top: 6rem;
          padding-bottom: 2rem;
          border-top: 1px solid var(--border);
          background: rgba(0,0,0,0.2);
        }
        
        .footer-grid {
          display: grid;
          grid-template-columns: 1.5fr 2fr;
          gap: 4rem;
          margin-bottom: 4rem;
        }
        
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
        }
        
        .brand-title {
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
        }
        
        .brand-tagline {
          color: var(--text-muted);
          font-size: 0.95rem;
          max-width: 320px;
          line-height: 1.6;
          margin-bottom: 2rem;
        }
        
        .social-links {
          display: flex;
          gap: 1rem;
        }
        
        .social-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: var(--glass);
          border: 1px solid var(--border);
          color: var(--text-muted);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: var(--transition);
        }
        
        .social-btn:hover {
          color: var(--primary);
          border-color: var(--primary);
          background: var(--primary-glow);
          transform: translateY(-3px);
        }
        
        .footer-links-group {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
        }
        
        .column-title {
          font-size: 1rem;
          margin-bottom: 1.5rem;
          color: var(--text-main);
        }
        
        .column-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        
        .column-list a {
          color: var(--text-muted);
          text-decoration: none;
          font-size: 0.9rem;
          transition: var(--transition);
        }
        
        .column-list a:hover {
          color: var(--primary);
          padding-left: 5px;
        }
        
        .footer-bottom {
          padding-top: 2rem;
          border-top: 1px solid var(--border);
        }
        
        .bottom-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.8rem;
          color: var(--text-muted);
        }
        
        @media (max-width: 500px) {
          .bottom-content {
            flex-direction: column;
            gap: 1rem;
            text-align: center;
          }
        }
        
        .bottom-links {
          display: flex;
          gap: 2rem;
        }
        
        .bottom-links a {
          color: var(--text-muted);
          text-decoration: none;
          transition: var(--transition);
        }
        
        .bottom-links a:hover {
          color: var(--text-main);
        }
      `}</style>
    </footer>
  );
}
