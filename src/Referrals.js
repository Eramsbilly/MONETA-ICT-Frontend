import React from "react";

export default function Referrals() {
  return (
    <div className="card">
      <h2>Your Referral Link</h2>
      <input value="https://moneta-ict.onrender.com/register?ref=USER123" readOnly />
      <p>5% referral bonus</p>
    </div>
  );
}
