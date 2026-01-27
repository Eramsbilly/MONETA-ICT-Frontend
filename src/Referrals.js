import React, { useEffect, useState } from "react";
import API from "./api";

export default function Referrals() {
  const [refs, setRefs] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    API.referrals(token).then(setRefs);
  }, []);

  return (
    <div className="page">
      <h2>Your Referrals</h2>
      <ul>
        {refs.map((r, i) => (
          <li key={i}>{r.email} — Bonus: ${r.bonus}</li>
        ))}
      </ul>
    </div>
  );
}
