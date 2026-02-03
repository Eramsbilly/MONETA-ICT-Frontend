import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import your pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Deposit from "./pages/Deposit";
import Withdraw from "./pages/Withdraw";
import Plans from "./pages/Plans";
import Referrals from "./pages/Referrals";
import Admin from "./pages/Admin";
import History from "./pages/History";

// Optional: Navbar if you have one
import Navbar from "./components/Navbar";

function App() {

  useEffect(() => {
    if (window.Telegram?.WebApp) {
      const tg = window.Telegram.WebApp;

      // Tell Telegram app is ready
      tg.ready();

      // Expand to full height
      tg.expand();

      // Optional: Log Telegram user data
      console.log("Telegram User:", tg.initDataUnsafe?.user);

      // Optional: Set theme color to match Telegram
      tg.setHeaderColor("#111827");
      tg.setBackgroundColor("#ffffff");
    }
  }, []);

  return (
    <Router>
      <div style={{ minHeight: "100vh", background: "#f5f5f5" }}>
        
        {/* Optional Navbar */}
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/deposit" element={<Deposit />} />
          <Route path="/withdraw" element={<Withdraw />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/referrals" element={<Referrals />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;