import React, { useEffect, useState } from "react";
import { getDashboard } from "./api";
import WalletBox from "./WalletBox";
import Plans from "./Plans";

export default function Dashboard() {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    async function load() {
      try {
        const res = await getDashboard();
        setData(res.data);
      } catch (err) {
        setError("Session expired. Please login again.");
        localStorage.removeItem("token");
        window.location.href = "/login";
      }
    }
    load();
  }, []);

  if (error) return <p>{error}</p>;
  if (!data) return <p>Loading dashboard...</p>;

  return (
    <div className="dashboard">
      <h2>MONETA-ICT Dashboard</h2>

      <WalletBox balance={data.balance} />

      <div className="referral-box">
        <p>Your Referral Code:</p>
        <strong>{data.referral_code}</strong>
        <p>
          Referral Link:
          <br />
          <small>
            {window.location.origin}/register?ref={data.referral_code}
          </small>
        </p>
      </div>

      <Plans />
    </div>
  );
}
