export default function Admin() {
  return (
    <div style={{ padding: 20 }}>
      <h2>🛠 Panel de Administración</h2>

      <p>
        Este panel es solo para administradores.
      </p>

      <ul>
        <li>👤 Ver usuarios registrados</li>
        <li>💰 Aprobar depósitos</li>
        <li>🏧 Aprobar retiros</li>
        <li>📈 Ver inversiones activas</li>
        <li>✏️ Ajustar balances (+ / −)</li>
      </ul>

      <p style={{ marginTop: 10, color: "gray" }}>
        ✅ Las aprobaciones se realizan vía Telegram Bot.
      </p>
    </div>
  );
}