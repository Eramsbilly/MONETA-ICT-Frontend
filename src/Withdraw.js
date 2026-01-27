import React from "react";

export default function Withdraw() {
  return (
    <div className="card">
      <h2>Withdraw</h2>
      <p>Min Withdrawal: $10</p>
      <input placeholder="Amount" />
      <button className="btn">Request Withdrawal</button>
    </div>
  );
}
