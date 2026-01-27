import { useState } from "react";

export default function Register({ setToken, go }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = async () => {
    const res = await fetch("https://moneta-ict.onrender.com/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    if (data.token) {
      localStorage.setItem("token", data.token);
      setToken(data.token);
      go("dashboard");
    } else alert("Register failed");
  };

  return (
    <div className="p-6 max-w-sm mx-auto">
      <h2 className="text-xl mb-4">Register</h2>
      <input className="w-full p-2 mb-2" placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input className="w-full p-2 mb-2" type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
      <button onClick={submit} className="bg-green-600 p-2 w-full">Register</button>
      <p className="mt-2 text-sm" onClick={() => go("login")}>Already have account?</p>
    </div>
  );
}