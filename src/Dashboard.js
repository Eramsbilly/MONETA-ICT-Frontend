import { useEffect, useState } from "react";
import { apiRequest } from "./api";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const data = await apiRequest("/user");
        setUser(data);
      } catch (err) {
        alert("Session expired. Please login again.");
        localStorage.clear();
        window.location.href = "/";
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  if (loading) return <p>Loading dashboard...</p>;
  if (!user) return null;

  return (
    <div style={{ padding: 20 }}>
      <h2>📊 Dashboard</h2>
      <p>Welcome, <b>{user.email}</b></p>

      <div style={{ marginTop: 20 }}>
        <p>💰 Balance: <b>${user.balance.toLocaleString()} COP</b></p>
        <p>🎁 Welcome Bonus: <b>${user.bonus?.toLocaleString() || 0} COP</b></p>
        <p>👥 Referrals: <b>{user.referrals || 0}</b></p>
      </div>
    </div>
  );
}