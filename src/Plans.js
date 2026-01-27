import React from "react";
import API from "./api";

const plans = [
  { id: 1, name: "Starter", min: 25, roi: 5 },
  { id: 2, name: "Silver", min: 50, roi: 12 },
  { id: 3, name: "Gold", min: 100, roi: 25 },
  { id: 4, name: "Diamond", min: 250, roi: 70 },
];

export default function Plans() {
  const invest = async (plan) => {
    const amount = prompt(`Enter amount (min $${plan.min})`);
    const token = localStorage.getItem("token");
    const res = await API.invest(token, plan.id, amount);
    alert(res.message || "Investment submitted");
  };

  return (
    <div className="page">
      <h2>Investment Plans</h2>
      {plans.map((p) => (
        <div key={p.id} className="card">
          <h3>{p.name}</h3>
          <p>Min: ${p.min}</p>
          <p>Weekly ROI: ${p.roi}</p>
          <button onClick={() => invest(p)}>Invest</button>
        </div>
      ))}
    </div>
  );
}
