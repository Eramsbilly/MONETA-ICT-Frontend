import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ padding: 10, background: "#fff" }}>
      <Link to="/dashboard">🏠 Inicio</Link>
      <Link to="/plans">📊 Planes</Link>
      <Link to="/wallet">💰 Billetera</Link>
      <Link to="/history">📜 Historial</Link>
      <Link to="/profile">👤 Mi Cuenta</Link>
      <Link to="/admin">🛠 Admin</Link>
    </nav>
  );
  }
