import React from "react";

const countries = [
  { name: "Mexico", currency: "MXN" },
  { name: "Brazil", currency: "BRL" },
  { name: "Argentina", currency: "ARS" },
  { name: "Colombia", currency: "COP" },
  { name: "Chile", currency: "CLP" },
  { name: "Peru", currency: "PEN" },
];

export default function CountrySelector({ onChange }) {
  return (
    <div className="card">
      <h4>Select Country</h4>
      <select onChange={(e) => onChange(e.target.value)}>
        {countries.map((c, i) => (
          <option key={i} value={c.currency}>
            {c.name} ({c.currency})
          </option>
        ))}
      </select>
    </div>
  );
}
