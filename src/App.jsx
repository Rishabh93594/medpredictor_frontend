import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

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
import Settings from "./pages/Settings";

const PageTransition = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.3, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/register" element={<PageTransition><Auth /></PageTransition>} />
        <Route path="/login" element={<PageTransition><Auth /></PageTransition>} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <PageTransition><Dashboard /></PageTransition>
            </ProtectedRoute>
          }
        />
        <Route path="/predict" element={<PageTransition><Predict /></PageTransition>} />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <PageTransition><AdminPanel /></PageTransition>
            </ProtectedRoute>
          }
        />
        <Route
          path="/settings"
          element={
            <ProtectedRoute>
              <PageTransition><Settings /></PageTransition>
            </ProtectedRoute>
          }
        />
        <Route
          path="/predict/diabetes"
          element={
            <ProtectedRoute>
              <PageTransition><DiabetesPredict /></PageTransition>
            </ProtectedRoute>
          }
        />
        <Route
          path="/predict/heart"
          element={
            <ProtectedRoute>
              <PageTransition><HeartPredict /></PageTransition>
            </ProtectedRoute>
          }
        />

        <Route
          path="/predict/liver"
          element={
            <ProtectedRoute>
              <PageTransition><LiverPredict /></PageTransition>
            </ProtectedRoute>
          }
        />
        <Route
          path="/prediction-result"
          element={
            <ProtectedRoute>
              <PageTransition><PredictionResult /></PageTransition>
            </ProtectedRoute>
          }
        />
        <Route
          path="/history"
          element={
            <ProtectedRoute>
              <PageTransition><History /></PageTransition>
            </ProtectedRoute>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;