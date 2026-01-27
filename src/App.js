import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Navbar";
import Login from "./Login";
import Register from "./Register";
import Dashboard from "./Dashboard";
import Deposit from "./Deposit";
import Withdraw from "./Withdraw";
import Plans from "./Plans";
import Referrals from "./Referrals";
import Admin from "./Admin";
import AdminPayments from "./AdminPayments";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/deposit" element={<Deposit />} />
        <Route path="/withdraw" element={<Withdraw />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/referrals" element={<Referrals />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/payments" element={<AdminPayments />} />
      </Routes>
    </Router>
  );
}

export default App;