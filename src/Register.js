import React, { useState } from "react";
import { registerUser } from "./api";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ref, setRef] = useState("");

  const submit = async () => {
    const res = await registerUser(email, password, ref);

    if (res.token) {
      localStorage.setItem("token", res.token);
      window.location.href = "/dashboard";
    } else {
      alert(res.message || "Registration failed");
    }
  };

  return (
    <div className="page">
      <h2>Register</h2>

      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <input
        placeholder="Referral code (optional)"
        value={ref}
        onChange={(e) => setRef(e.target.value)}
      />

      <button onClick={submit}>Create Account</button>
    </div>
  );
}
