import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";

import Login from "./Login";
import Register from "./Register";
import Dashboard from "./Dashboard";
import Plans from "./Plans";
import Wallet from "./Wallet";
import Deposit from "./Deposit";
import Withdraw from "./Withdraw";
import TransactionHistory from "./TransactionHistory";
import Profile from "./Profile";
import Referrals from "./Referrals";
import Admin from "./Admin";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/deposit" element={<Deposit />} />
        <Route path="/withdraw" element={<Withdraw />} />
        <Route path="/history" element={<TransactionHistory />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/referrals" element={<Referrals />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
  }
