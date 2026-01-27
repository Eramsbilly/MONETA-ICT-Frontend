import React from "react";

export default function Register() {
  return (
    <div className="card">
      <h2>Register</h2>
      <input placeholder="Email" />
      <input placeholder="Referral Code (optional)" />
      <input type="password" placeholder="Password" />
      <button className="btn">Create Account</button>
    </div>
  );
}
