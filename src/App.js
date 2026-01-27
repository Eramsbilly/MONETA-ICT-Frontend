import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Dashboard from "./Dashboard";
import Plans from "./Plans";
import Deposit from "./Deposit";
import Withdraw from "./Withdraw";
import History from "./History";
import WalletBox from "./WalletBox";
import Referrals from "./Referrals";
import Login from "./Login";
import Register from "./Register";
import Admin from "./Admin";
import AdminPayments from "./AdminPayments";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/deposit" element={<Deposit />} />
        <Route path="/withdraw" element={<Withdraw />} />
        <Route path="/history" element={<History />} />
        <Route path="/wallet" element={<WalletBox />} />
        <Route path="/referrals" element={<Referrals />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin-payments" element={<AdminPayments />} />
      </Routes>
    </Router>
  );
}

export default App;
