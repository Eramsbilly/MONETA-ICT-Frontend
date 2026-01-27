import React, { useState } from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Plans from "./pages/Plans";
import Deposit from "./pages/Deposit";
import Withdraw from "./pages/Withdraw";
import Referrals from "./pages/Referrals";
import History from "./pages/History";
import Admin from "./pages/Admin";
import Navbar from "./components/Navbar";

export default function App() {
  const [page, setPage] = useState("login");
  const [token, setToken] = useState(localStorage.getItem("token"));

  const go = (p) => setPage(p);

  if (!token && page !== "register") return <Login setToken={setToken} go={go} />;
  if (!token && page === "register") return <Register setToken={setToken} go={go} />;

  return (
    <div style={{ padding: 16 }}>
      <Navbar go={go} />
      {page === "dashboard" && <Dashboard token={token} />}
      {page === "plans" && <Plans token={token} />}
      {page === "deposit" && <Deposit token={token} />}
      {page === "withdraw" && <Withdraw token={token} />}
      {page === "referrals" && <Referrals token={token} />}
      {page === "history" && <History token={token} />}
      {page === "admin" && <Admin token={token} />}
    </div>
  );
}