import React from "react";

export default function Deposit() {
  return (
    <div className="card">
      <h2>Deposit</h2>
      <p>Min Deposit: $50</p>
      <input placeholder="Amount" />
      <button className="btn">Submit Deposit</button>
    </div>
  );
}
