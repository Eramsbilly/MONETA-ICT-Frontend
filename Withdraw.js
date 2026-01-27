import { useState } from "react";

export default function Withdraw({ token }) {
  const [amount, setAmount] = useState("");
  const [address, setAddress] = useState("");

  const submit = async () => {
    await fetch("https://moneta-ict.onrender.com/api/withdraw", {
      method: "POST",
      headers: { 
        "Content-Type": "application/json",
        "Authorization": token 
      },
      body: JSON.stringify({ amount, address }),
    });
    alert("Withdrawal requested");
  };

  return (
    <div className="p-6">
      <h2 className="text-xl mb-4">Withdraw</h2>
      <input className="w-full p-2 mb-2" placeholder="Amount" onChange={e => setAmount(e.target.value)} />
      <input className="w-full p-2 mb-2" placeholder="Wallet Address" onChange={e => setAddress(e.target.value)} />
      <button onClick={submit} className="bg-red-600 p-2 w-full">Withdraw</button>
    </div>
  );
}