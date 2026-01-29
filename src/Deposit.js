import { useState } from "react";
import { apiRequest } from "./api";

export default function Deposit() {
  const [amount, setAmount] = useState("");

  async function submit() {
    if (!amount || amount < 40000) {
      alert("Minimum deposit is 40,000 COP");
      return;
    }

    await apiRequest("/deposit", "POST", { amount });
    alert("Deposit submitted. Awaiting approval.");
    setAmount("");
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>💰 Deposit</h2>

      <p><b>Bancolombia Ahorro</b></p>
      <p>00100007120</p>
      <p>Jose Jimenez</p>

      <input
        type="number"
        placeholder="Amount (COP)"
        value={amount}
        onChange={e => setAmount(e.target.value)}
      />

      <button onClick={submit}>Submit Deposit</button>
    </div>
  );
}