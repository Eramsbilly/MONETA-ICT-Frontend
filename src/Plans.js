import PlanCard from "./PlanCard";

export default function Plans() {
  const plans = [
    { name: "Plan Básico", min: 50000, daily: 8600 },
    { name: "Plan Pro", min: 100000, daily: 18000 }
  ];

  return (
    <div>
      <h2>📊 Planes de Inversión</h2>
      {plans.map(p => <PlanCard key={p.name} plan={p} />)}
    </div>
  );
}
