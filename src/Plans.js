import React from "react";
import API from "./api";
import PlanCard from "./PlanCard";

const PLANS = [
  { id: 1, name: "Starter", amount: 25, weekly: 5, weeks: 6 },
  { id: 2, name: "Bronze", amount: 50, weekly: 12, weeks: 6 },
  { id: 3, name: "Silver", amount: 100, weekly: 30, weeks: 6 },
  { id: 4, name: "Gold", amount: 250, weekly: 90, weeks: 6 },
  { id: 5, name: "Platinum", amount: 500, weekly: 200, weeks: 6 },
];

export default function Plans() {
  const invest = async (plan) => {
    const token = localStorage.getItem("token");
    if (!token) return alert("Please login");

    const res = await API.invest(token, plan.id, plan.amount);

    alert(res.message || "Investment submitted");
  };

  return (
    <div className="page">
      <h2>Investment Plans</h2>

      <div className="grid">
        {PLANS.map((p) => (
          <PlanCard key={p.id} plan={p} onInvest={() => invest(p)} />
        ))}
      </div>
    </div>
  );
}
