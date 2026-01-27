import { useState } from "react";

export default function Deposit({ token }) {
  const [amount, setAmount] = useState("");
  const [method, setMethod] = useState("USDT");
  const [country, setCountry] = useState("Mexico");
  const [proof, setProof] = useState("");

  const submit = async () => {
    await fetch("https://moneta-ict.onrender.com/api/deposit", {
      method: "POST",
      headers: { 
        "Content-Type": "application/json",
        "Authorization": token 
      },
      body: JSON.stringify({ amount, method, country, proof }),
    });
    alert("Deposit submitted");
  };

  return (
    <div className="p-6">
      <h2 className="text-xl mb-4">Deposit</h2>
      <input className="w-full p-2 mb-2" placeholder="Amount" onChange={e => setAmount(e.target.value)} />
      <select className="w-full p-2 mb-2" onChange={e => setMethod(e.target.value)}>
        <option>USDT</option>
        <option>Bitcoin</option>
        <option>MercadoPago</option>
        <option>Pix</option>
      </select>
      <select className="w-full p-2 mb-2" onChange={e => setCountry(e.target.value)}>
        <option>Mexico</option>
        <option>Brazil</option>
        <option>Argentina</option>
        <option>Colombia</option>
        <option>Peru</option>
      </select>
      <input className="w-full p-2 mb-2" placeholder="Proof URL" onChange={e => setProof(e.target.value)} />
      <button onClick={submit} className="bg-green-600 p-2 w-full">Submit</button>
    </div>
  );
}