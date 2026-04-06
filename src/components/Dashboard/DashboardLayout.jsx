import Sidebar from "./Sidebar";
import DashboardHeader from "./DashboardHeader";

export default function DashboardLayout({ children }) {
  return (
    <div className="dash-layout">
      <Sidebar />
      <main className="dash-main">
        <DashboardHeader />
        <div className="dash-viewport">
          {children}
        </div>
      </main>
    </div>
  );
}
