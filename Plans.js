import React, { useEffect, useState } from "react";
import axios from "axios";
import PlanCard from "../components/PlanCard";

const API = "https://moneta-ict.onrender.com";

export default function Plans({ token }) {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    axios.get(API + "/api/plans").then(r => setPlans(r.data));
  }, []);

  async function invest(plan) {
    await axios.post(API + "/api/invest", { plan: plan.name, amount: plan.amount }, {
      headers: { Authorization: "Bearer " + token }
    });
    alert("Investment started");
  }

  return (
    <div>
      <h2>Investment Plans</h2>
      {plans.map(p => (
        <PlanCard key={p.name} plan={p} invest={invest} />
      ))}
    </div>
  );
}