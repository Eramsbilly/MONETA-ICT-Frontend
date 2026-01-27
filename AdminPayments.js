import { useState, useEffect } from "react";

export default function AdminPayments() {
  const [methods, setMethods] = useState([]);
  const [form, setForm] = useState({
    country: "",
    method_type: "bank",
    provider_name: "",
    account_name: "",
    account_number: "",
    instructions: "",
    is_active: true
  });

  useEffect(() => {
    fetch("https://moneta-ict.onrender.com/api/admin/payments")
      .then(res => res.json())
      .then(data => setMethods(data));
  }, []);

  const saveMethod = async () => {
    const res = await fetch("https://moneta-ict.onrender.com/api/admin/payments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });

    const data = await res.json();
    alert(data.message || "Saved");

    setForm({
      country: "",
      method_type: "bank",
      provider_name: "",
      account_name: "",
      account_number: "",
      instructions: "",
      is_active: true
    });
  };

  return (
    <div className="p-6 text-white">
      <h2 className="text-2xl font-bold mb-4">Payment Methods (Admin)</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-900 p-4 rounded">

        <input placeholder="Country (e.g. Mexico)"
          value={form.country}
          onChange={e => setForm({ ...form, country: e.target.value })}
          className="p-2 bg-gray-800 rounded" />

        <select
          value={form.method_type}
          onChange={e => setForm({ ...form, method_type: e.target.value })}
          className="p-2 bg-gray-800 rounded">
          <option value="bank">Bank</option>
          <option value="wallet">Wallet</option>
          <option value="crypto">Crypto</option>
        </select>

        <input placeholder="Provider (PIX, SPEI, Nequi)"
          value={form.provider_name}
          onChange={e => setForm({ ...form, provider_name: e.target.value })}
          className="p-2 bg-gray-800 rounded" />

        <input placeholder="Account Name"
          value={form.account_name}
          onChange={e => setForm({ ...form, account_name: e.target.value })}
          className="p-2 bg-gray-800 rounded" />

        <input placeholder="Account Number"
          value={form.account_number}
          onChange={e => setForm({ ...form, account_number: e.target.value })}
          className="p-2 bg-gray-800 rounded" />

        <textarea placeholder="Instructions"
          value={form.instructions}
          onChange={e => setForm({ ...form, instructions: e.target.value })}
          className="p-2 bg-gray-800 rounded col-span-2" />

        <button
          onClick={saveMethod}
          className="bg-green-600 p-2 rounded col-span-2 hover:bg-green-700">
          Save Method
        </button>
      </div>

      <h3 className="mt-6 text-xl font-bold">Current Methods</h3>

      <ul className="mt-2 space-y-2">
        {methods.map(m => (
          <li key={m.id} className="bg-gray-800 p-3 rounded">
            <b>{m.country}</b> – {m.provider_name}  
            <div className="text-sm text-gray-400">{m.account_name}</div>
            <div className="text-sm text-gray-400">{m.account_number}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}