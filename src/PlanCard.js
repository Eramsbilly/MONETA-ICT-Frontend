export default function PlanCard({ plan }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: 15,
        marginBottom: 12,
        borderRadius: 6,
      }}
    >
      <h3>🔥 {plan.name}</h3>

      <p>💵 Inversión mínima: <b>${plan.min.toLocaleString()} COP</b></p>
      <p>📈 Ganancia diaria: <b>${plan.daily.toLocaleString()} COP</b></p>
      <p>📅 Duración: <b>{plan.duration}</b></p>
      <p>💎 Retorno total estimado: <b>${plan.total.toLocaleString()} COP</b></p>

      <button>Invertir ahora</button>
    </div>
  );
}