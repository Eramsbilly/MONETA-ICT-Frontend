import React, { useState } from "react";
import CountrySelector from "./CountrySelector";
import PaymentMethods from "./PaymentMethods";
import API from "./api";

export default function Deposit() {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("USD");

  const submit = async () => {
    await API.post("/deposit", { amount, currency });
    alert("Deposit submitted");
  };

  return (
    <div>
      <div className="card">
        <h2>Deposit</h2>
        <input placeholder="Amount" onChange={(e) => setAmount(e.target.value)} />
        <CountrySelector onChange={setCurrency} />
        <PaymentMethods />
        <button className="btn" onClick={submit}>Submit</button>
      </div>
    </div>
  );
}
