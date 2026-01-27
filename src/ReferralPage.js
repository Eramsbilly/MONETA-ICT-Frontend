import React from "react";

export default function ReferralPage() {
  const code = "USER123";
  const link = `https://moneta-ict.onrender.com/register?ref=${code}`;

  return (
    <div className="card">
      <h2>Referral Program</h2>
      <p>Earn 5% on every referral deposit</p>
      <input value={link} readOnly />
      <button className="btn" onClick={() => navigator.clipboard.writeText(link)}>
        Copy Link
      </button>
    </div>
  );
}
