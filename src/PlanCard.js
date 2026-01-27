import React from "react";

export default function PlanCard({ plan }) {
  return (
    <div className="card">
      <h3>{plan.name}</h3>
      <p>Investment: ${plan.amount}</p>
      <p>Weekly ROI: ${plan.weekly}</p>
      <button className="btn">Invest</button>
    </div>
  );
}
