import React, { useState } from "react";
import API from "./api";

export default function Withdraw() {
  const [amount, setAmount] = useState("");
  const [method, setMethod] = useState("USDT");

  const submit = async () => {
    const token = localStorage.getItem("token");
    if (!token) return alert("Please login");

    const res = await API.withdraw(token, Number(amount), method);
    alert(res.message || "Withdraw request sent");
  };

  return (
    <div className="page">
      <h2>Withdraw Funds</h2>

      <input
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <select value={method} onChange={(e) => setMethod(e.target.value)}>
        <option value="USDT">USDT (TRC20)</option>
        <option value="BTC">Bitcoin</option>
        <option value="PIX">PIX (Brazil)</option>
        <option value="SPEI">SPEI (Mexico)</option>
      </select>

      <button onClick={submit}>Request Withdrawal</button>
    </div>
  );
}
