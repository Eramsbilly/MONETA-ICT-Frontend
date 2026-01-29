import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
      <Link to="/dashboard">🏠 Home</Link>{" | "}
      <Link to="/plans">📈 Plans</Link>{" | "}
      <Link to="/deposit">💰 Wallet</Link>{" | "}
      <Link to="/referrals">👥 Referrals</Link>{" | "}
      <Link to="/admin">🛠 Admin</Link>
    </nav>
  );
}