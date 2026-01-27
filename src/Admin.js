import React, { useEffect, useState } from "react";
import API from "./api";

export default function Admin() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    API.dashboard(token).then((res) => setData(res.users || []));
  }, []);

  return (
    <div className="page">
      <h2>Admin Panel</h2>
      {data.map((u, i) => (
        <div key={i}>
          {u.email} — Balance: ${u.balance}
        </div>
      ))}
    </div>
  );
}
