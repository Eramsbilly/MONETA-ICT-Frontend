import React, { useEffect, useState } from "react";
import axios from "axios";

const API = "https://moneta-ict.onrender.com";

export default function Admin({ token }) {
  const [withdrawals, setWithdrawals] = useState([]);

  useEffect(() => {
    axios.get(API + "/api/admin/withdrawals", {
      headers: { Authorization: "Bearer " + token }
    }).then(r => setWithdrawals(r.data));
  }, [token]);

  async function approve(id) {
    await axios.post(API + "/api/admin/withdrawals/" + id + "/approve", {}, {
      headers: { Authorization: "Bearer " + token }
    });
    alert("Approved");
  }

  async function reject(id) {
    await axios.post(API + "/api/admin/withdrawals/" + id + "/reject", {}, {
      headers: { Authorization: "Bearer " + token }
    });
    alert("Rejected");
  }

  return (
    <div>
      <h2>Admin Dashboard</h2>
      {withdrawals.map(w => (
        <div key={w.id} className="card">
          User #{w.user_id} — ${w.amount} — {w.status}
          <button className="btn" onClick={() => approve(w.id)}>Approve</button>
          <button className="btn-alt" onClick={() => reject(w.id)}>Reject</button>
        </div>
      ))}
    </div>
  );
}