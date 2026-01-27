import React from "react";

export default function TransactionTable({ data }) {
  return (
    <table className="card">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {data.map((t, i) => (
          <tr key={i}>
            <td>{t.type}</td>
            <td>${t.amount}</td>
            <td>{t.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
