import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function LandingNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar-main ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <div className="nav-left">
          <Link to="/" className="nav-logo">
            Med<span className="text-primary">Predictor</span>
          </Link>
          
          <div className="nav-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/predict" className="nav-link">Predictions</Link>
            <Link to="/about" className="nav-link">About</Link>
          </div>
        </div>

        <div className="nav-right">
          <button className="nav-icon-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
          </button>
          <button className="avatar-btn">
            <div className="avatar-inner">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
            </div>
          </button>
        </div>
      </div>

      <style>{`
        .navbar-main {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          transition: var(--transition);
          padding: 1.5rem 0;
        }
        
        .navbar-main.scrolled {
          background: rgba(6, 9, 18, 0.8);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--border);
          padding: 1rem 0;
        }
        
        .nav-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        
        .nav-left {
          display: flex;
          align-items: center;
          gap: 3rem;
        }
        
        .nav-logo {
          font-size: 1.25rem;
          font-weight: 700;
          text-decoration: none;
          color: var(--text-main);
          letter-spacing: -0.01em;
        }
        
        .nav-links {
          display: flex;
          align-items: center;
          gap: 2rem;
        }
        
        @media (max-width: 768px) {
          .nav-links { display: none; }
        }
        
        .nav-link {
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--text-muted);
          text-decoration: none;
          transition: var(--transition);
        }
        
        .nav-link:hover {
          color: var(--primary);
        }
        
        .nav-right {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }
        
        .nav-icon-btn {
          background: transparent;
          border: none;
          color: var(--text-muted);
          cursor: pointer;
          transition: var(--transition);
          display: flex;
          align-items: center;
        }
        
        .nav-icon-btn:hover {
          color: var(--text-main);
        }
        
        .avatar-btn {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          border: 1px solid rgba(45, 212, 191, 0.2);
          background: transparent;
          padding: 2px;
          cursor: pointer;
          transition: var(--transition);
        }
        
        .avatar-inner {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: rgba(45, 212, 191, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .avatar-btn:hover {
          background: rgba(45, 212, 191, 0.1);
          border-color: var(--primary);
        }
      `}</style>
    </nav>
  );
}
