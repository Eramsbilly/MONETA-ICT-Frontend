import React from "react";

export default function Referrals({ token }) {
  const link = window.location.origin + "/?ref=" + token.slice(0, 8);

  return (
    <div className="card">
      <h2>Referral Program</h2>
      <p>Earn 5% commission per referral investment.</p>
      <input value={link} readOnly />
      <button className="btn" onClick={() => navigator.clipboard.writeText(link)}>Copy Link</button>
    </div>
  );
}