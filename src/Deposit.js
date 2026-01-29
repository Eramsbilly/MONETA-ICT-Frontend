import { useState } from "react";

export default function Deposit() {
  const [amount, setAmount] = useState("");
  const [proof, setProof] = useState(null);

  return (
    <div style={{ padding: 20 }}>
      <h2>💰 Depositar Fondos</h2>
      <p>📍 Método bancario (Colombia)</p>

      <div style={{ background: "#f5f5f5", padding: 15, borderRadius: 6 }}>
        <p><b>Banco:</b> Bancolombia</p>
        <p><b>Tipo:</b> Ahorro</p>
        <p><b>Número:</b> 00100007120</p>
        <p><b>Titular:</b> Jose Jimenez</p>
      </div>

      <p style={{ marginTop: 15 }}>
        💡 Mínimo depósito: <b>$40.000 COP</b>
      </p>

      <input
        type="number"
        placeholder="Monto en COP"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <input
        type="file"
        onChange={(e) => setProof(e.target.files[0])}
      />

      <button
        onClick={() => alert("Depósito enviado. Pendiente de aprobación.")}
      >
        📤 Enviar comprobante
      </button>

      <p style={{ marginTop: 10, color: "gray" }}>
        ⏳ Los depósitos se aprueban vía Telegram.
      </p>
    </div>
  );
}