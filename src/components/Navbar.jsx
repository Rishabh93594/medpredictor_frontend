import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div
      style={{
        padding: "15px",
        background: "#222",
        color: "white",
        display: "flex",
        gap: "15px",
      }}
    >
      <button onClick={() => navigate("/dashboard")}>Dashboard</button>
      <button onClick={() => navigate("/predict")}>New Prediction</button>
      <button onClick={() => navigate("/history")}>History</button>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Navbar;