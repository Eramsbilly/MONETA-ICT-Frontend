import React from "react";

export default function Login() {
  return (
    <div className="card">
      <h2>Login</h2>
      <input placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button className="btn">Login</button>
    </div>
  );
}
