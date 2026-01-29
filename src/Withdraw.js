import { useState } from "react";

export default function Withdraw() {
  const [amount, setAmount] = useState("");

  return (
    <div style={{ padding: 20 }}>
      <h2>🏧 Retiro de Fondos</h2>

      <p>
        💡 Mínimo retiro: <b>$25.000 COP</b>
      </p>

      <input
        type="number"
        placeholder="Monto en COP"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button
        onClick={() => alert("Solicitud enviada. En revisión.")}
      >
        📩 Solicitar retiro
      </button>

      <p style={{ marginTop: 10, color: "gray" }}>
        ⏳ Los retiros se procesan tras aprobación del administrador.
      </p>
    </div>
  );
}