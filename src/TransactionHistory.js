import { useEffect, useState } from "react";
import { apiRequest } from "./api";

export default function Transactions() {
  const [txs, setTxs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const data = await apiRequest("/transactions");
        setTxs(data);
      } catch {
        alert("Failed to load transactions");
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  if (loading) return <p>Loading transactions...</p>;

  return (
    <div style={{ padding: 20 }}>
      <h2>📜 Transaction History</h2>

      {txs.length === 0 && <p>No transactions yet.</p>}

      {txs.map(tx => (
        <div
          key={tx.id}
          style={{
            border: "1px solid #ccc",
            padding: 10,
            marginBottom: 8,
          }}
        >
          <p><b>Type:</b> {tx.type}</p>
          <p><b>Amount:</b> ${tx.amount.toLocaleString()} COP</p>
          <p><b>Status:</b> {tx.status}</p>
          <p><b>Date:</b> {tx.created_at}</p>
        </div>
      ))}
    </div>
  );
}