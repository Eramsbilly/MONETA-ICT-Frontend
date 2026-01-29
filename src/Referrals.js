export default function Referrals() {
  const referralCode = "ABC123";
  const referralLink = `https://moneta-ict.vercel.app/register?ref=${referralCode}`;

  return (
    <div style={{ padding: 20 }}>
      <h2>👥 Programa de Referidos</h2>

      <p>
        Gana <b>5%</b> por cada inversión de tus referidos.
      </p>

      <div style={{ background: "#f5f5f5", padding: 10 }}>
        <p>🔗 Tu enlace:</p>
        <code>{referralLink}</code>
      </div>

      <p style={{ marginTop: 10 }}>
        📢 Comparte este enlace para invitar nuevos usuarios.
      </p>
    </div>
  );
}