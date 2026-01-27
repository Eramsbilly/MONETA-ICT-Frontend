import React, { useEffect, useState } from "react";
import API from "./api";

export default function Dashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      window.location.href = "/login";
      return;
    }

    API.dashboard(token).then((res) => {
      if (res.message === "Invalid token") {
        localStorage.removeItem("token");
        window.location.href = "/login";
      } else {
        setData(res);
      }
    });
  }, []);

  if (!data) return <div>Loading dashboard...</div>;

  return (
    <div className="page">
      <h2>MONETA-ICT Dashboard</h2>

      <div className="card">
        <strong>Email:</strong> {data.email}
      </div>

      <div className="card">
        <strong>Balance:</strong> ${data.balance}
      </div>

      <div className="card">
        <strong>Total Invested:</strong> ${data.total_invested}
      </div>

      <div className="card">
        <strong>Active Plans:</strong> {data.active_plans}
      </div>

      <div className="card">
        <strong>Referral Earnings:</strong> ${data.referral_earnings}
      </div>

      <button onClick={() => (window.location.href = "/plans")}>
        Invest Now
      </button>

      <button onClick={() => (window.location.href = "/withdraw")}>
        Withdraw
      </button>

      <button
        onClick={() => {
          localStorage.removeItem("token");
          window.location.href = "/login";
        }}
      >
        Logout
      </button>
    </div>
  );
}
