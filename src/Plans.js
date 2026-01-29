import PlanCard from "./PlanCard";

export default function Plans() {
  const plans = [
    {
      name: "Starter",
      min: 50000,
      daily: 8600,
      duration: "30 días",
      total: 258000,
    },
    {
      name: "Bronce",
      min: 100000,
      daily: 18000,
      duration: "30 días",
      total: 540000,
    },
    {
      name: "Plata",
      min: 200000,
      daily: 40000,
      duration: "30 días",
      total: 1200000,
    },
    {
      name: "Oro",
      min: 300000,
      daily: 65000,
      duration: "30 días",
      total: 1950000,
    },
    {
      name: "Diamante",
      min: 500000,
      daily: 115000,
      duration: "30 días",
      total: 3450000,
    },
    {
      name: "Elite",
      min: 750000,
      daily: 180000,
      duration: "30 días",
      total: 5400000,
    },
    {
      name: "Premium",
      min: 1000000,
      daily: 250000,
      duration: "30 días",
      total: 7500000,
    },
    {
      name: "Executive",
      min: 1500000,
      daily: 400000,
      duration: "30 días",
      total: 12000000,
    },
    {
      name: "Corporate",
      min: 2000000,
      daily: 550000,
      duration: "30 días",
      total: 16500000,
    },
    {
      name: "Master",
      min: 3000000,
      daily: 850000,
      duration: "30 días",
      total: 25500000,
    },
    {
      name: "Titanium",
      min: 5000000,
      daily: 1500000,
      duration: "30 días",
      total: 45000000,
    },
    {
      name: "Moneta ICT VIP",
      min: 10000000,
      daily: 3500000,
      duration: "30 días",
      total: 105000000,
    },
  ];

  return (
    <div style={{ padding: 20 }}>
      <h2>📈 Planes de Inversión – Colombia 🇨🇴</h2>
      <p>💰 Moneda: Pesos Colombianos (COP)</p>
      <p>⏱ Retorno diario | 📅 Pagos por 30 días</p>

      {plans.map((plan, index) => (
        <PlanCard key={index} plan={plan} />
      ))}
    </div>
  );
}