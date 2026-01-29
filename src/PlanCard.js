export default function PlanCard({ plan }) {
  return (
    <div style={{ border: "1px solid #ccc", margin: 10, padding: 10 }}>
      <h3>{plan.name}</h3>
      <p>Inversión mínima: ${plan.min.toLocaleString()} COP</p>
      <p>Ganancia diaria: ${plan.daily.toLocaleString()} COP</p>
      <button>Invertir</button>
    </div>
  );
    }
