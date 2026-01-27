import React, { useEffect, useState } from "react";
import API from "./api";

export default function Dashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    API.dashboard(token).then(setData);
  }, []);

  if (!data) return <div>Loading...</div>;

  return (
    <div className="page">
      <h2>MONETA-ICT Dashboard</h2>
      <p><b>Balance:</b> ${data.balance}</p>
      <p><b>Total Invested:</b> ${data.total_invested}</p>
      <p><b>Weekly ROI:</b> ${data.weekly_roi}</p>
      <p><b>Referrals:</b> {data.referrals}</p>
    </div>
  );
}
