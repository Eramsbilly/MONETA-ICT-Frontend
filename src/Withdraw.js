import { useState } from "react";
import { apiRequest } from "./api";

export default function Withdraw() {
  const [amount, setAmount] = useState("");

  async function submit() {
    if (!amount || amount < 25000) {
      alert("Minimum withdrawal is 25,000 COP");
      return;
    }

    await apiRequest("/withdraw", "POST", { amount });
    alert("Withdrawal request sent.");
    setAmount("");
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>🏧 Withdraw</h2>

      <input
        type="number"
        placeholder="Amount (COP)"
        value={amount}
        onChange={e => setAmount(e.target.value)}
      />

      <button onClick={submit}>Request Withdrawal</button>
    </div>
  );
}