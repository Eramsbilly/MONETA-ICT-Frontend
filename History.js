import React, { useEffect, useState } from "react";
import axios from "axios";

const API = "https://moneta-ict.onrender.com";

export default function History({ token }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get(API + "/api/dashboard", {
      headers: { Authorization: "Bearer " + token }
    }).then(r => setData(r.data));
  }, [token]);

  if (!data) return <div className="card">Loading...</div>;

  return (
    <div>
      <h2>Transaction History</h2>
      <h3>Withdrawals</h3>
      {data.withdrawals.map((w, i) => (
        <div key={i} className="card">${w.amount} — {w.status}</div>
      ))}
    </div>
  );
}