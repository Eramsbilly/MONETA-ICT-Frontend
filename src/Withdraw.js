import React, { useState } from "react";
import API from "./api";

export default function Withdraw() {
  const [amount, setAmount] = useState("");
  const [method, setMethod] = useState("USDT");

  const submit = async () => {
    const token = localStorage.getItem("token");
    const res = await API.withdraw(token, amount, method);
    alert(res.message || "Withdrawal submitted");
  };

  return (
    <div className="page">
      <h2>Withdraw Funds</h2>
      <input
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <select onChange={(e) => setMethod(e.target.value)}>
        <option>USDT</option>
        <option>Bitcoin</option>
        <option>Bank Transfer</option>
      </select>
      <button onClick={submit}>Withdraw</button>
    </div>
  );
}
