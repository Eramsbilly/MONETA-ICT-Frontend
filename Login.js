import { useState } from "react";

export default function Login({ setToken, go }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = async () => {
    const res = await fetch("https://moneta-ict.onrender.com/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    if (data.token) {
      localStorage.setItem("token", data.token);
      setToken(data.token);
      go("dashboard");
    } else alert("Login failed");
  };

  return (
    <div className="p-6 max-w-sm mx-auto">
      <h2 className="text-xl mb-4">Login</h2>
      <input className="w-full p-2 mb-2" placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input className="w-full p-2 mb-2" type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
      <button onClick={submit} className="bg-blue-600 p-2 w-full">Login</button>
      <p className="mt-2 text-sm" onClick={() => go("register")}>Create account</p>
    </div>
  );
}