import { BrowserRouter, Routes, Route } from "react-router-dom";

import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import Predict from "./pages/Predict";
import About from "./pages/About";
import DiabetesPredict from "./pages/DiabetesPredict";
import HeartPredict from "./pages/HeartPredict";
import LiverPredict from "./pages/LiverPredict";
import PredictionResult from "./pages/PredictionResult";
import History from "./pages/History";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AdminPanel from "./pages/AdminPanel";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Auth />} />
        <Route path="/login" element={<Auth />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="/predict" element={<Predict />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminPanel />
            </ProtectedRoute>
          }
        />
<Route
  path="/predict/diabetes"
  element={
    <ProtectedRoute>
      <DiabetesPredict />
    </ProtectedRoute>
  }
/>
<Route
  path="/predict/heart"
  element={
    <ProtectedRoute>
      <HeartPredict />
    </ProtectedRoute>
  }
/>

<Route
  path="/predict/liver"
  element={
    <ProtectedRoute>
      <LiverPredict />
    </ProtectedRoute>
  }
/>
<Route
  path="/prediction-result"
  element={
    <ProtectedRoute>
      <PredictionResult />
    </ProtectedRoute>
  }
/>
<Route
  path="/history"
  element={
    <ProtectedRoute>
      <History />
    </ProtectedRoute>
  }
/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;