import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="card">
      <h2>MONETA-ICT</h2>
      <Link to="/">Dashboard</Link> |{" "}
      <Link to="/plans">Plans</Link> |{" "}
      <Link to="/deposit">Deposit</Link> |{" "}
      <Link to="/withdraw">Withdraw</Link> |{" "}
      <Link to="/referrals">Referrals</Link>
    </div>
  );
}
