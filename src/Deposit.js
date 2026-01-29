import React, { useEffect, useState } from "react";

export default function Dashboard() {
  const [stats, setStats] = useState({
    balance: 120000,
    bonus: 12000,
    investments: 2,
    referrals: 1,
  });

  const [transactions, setTransactions] = useState([
    { id: 1, type: "Deposit", amount: 50000, status: "Approved" },
    { id: 2, type: "Investment", amount: 50000, status: "Active" },
    { id: 3, type: "Withdrawal", amount: 25000, status: "Pending" },
  ]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>📊 Main Panel</h2>
      <p>Welcome to <b>MONETA-ICT Colombia 🇨🇴</b></p>

      {/* SUMMARY CARDS */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "15px", marginTop: "20px" }}>
        <Card title="Balance" value={`$ ${stats.balance.toLocaleString()} COP`} />
        <Card title="Welcome Bonus" value={`$ ${stats.bonus.toLocaleString()} COP`} />
        <Card title="Active Investments" value={stats.investments} />
        <Card title="Referrals" value={stats.referrals} />
      </div>

      {/* TRANSACTIONS */}
      <h3 style={{ marginTop: "30px" }}>🧾 Recent Activity</h3>
      <table width="100%" border="1" cellPadding="8" style={{ marginTop: "10px" }}>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount (COP)</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(tx => (
            <tr key={tx.id}>
              <td>{tx.type}</td>
              <td>{tx.amount.toLocaleString()}</td>
              <td>{tx.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Card({ title, value }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      borderRadius: "8px",
      padding: "15px",
      background: "#f9f9f9"
    }}>
      <h4>{title}</h4>
      <strong>{value}</strong>
    </div>
  );
}