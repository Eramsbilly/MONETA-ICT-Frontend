export default function Wallet() {
  return (
    <div>
      <h2>💰 Billetera</h2>
      <p>Saldo: $0 COP</p>
      <button onClick={() => window.location.href="/deposit"}>Depositar</button>
      <button onClick={() => window.location.href="/withdraw"}>Retirar</button>
    </div>
  );
}
