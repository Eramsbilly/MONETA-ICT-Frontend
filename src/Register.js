import React, { useState } from "react";
import { registerUser } from "./api";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [referral, setReferral] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await registerUser({
        email,
        password,
        referral_code: referral || null,
      });

      localStorage.setItem("token", res.data.token);
      window.location.href = "/dashboard";
    } catch (err) {
      setError("Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <h2>Create MONETA-ICT Account</h2>

      {error && <p className="error">{error}</p>}

      <form onSubmit={handleRegister}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Referral Code (optional)"
          value={referral}
          onChange={(e) => setReferral(e.target.value)}
        />

        <button disabled={loading}>
          {loading ? "Creating account..." : "Register"}
        </button>
      </form>
    </div>
  );
}
