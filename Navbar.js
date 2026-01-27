import React from "react";

export default function Navbar({ go }) {
  return (
    <div className="card">
      <h2>MONETA-ICT</h2>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        <button className="btn" onClick={() => go("dashboard")}>Dashboard</button>
        <button className="btn" onClick={() => go("plans")}>Plans</button>
        <button className="btn" onClick={() => go("deposit")}>Deposit</button>
        <button className="btn" onClick={() => go("withdraw")}>Withdraw</button>
        <button className="btn" onClick={() => go("referrals")}>Referrals</button>
        <button className="btn" onClick={() => go("history")}>History</button>
        <button className="btn-alt" onClick={() => go("admin")}>Admin</button>
      </div>
    </div>
  );
}