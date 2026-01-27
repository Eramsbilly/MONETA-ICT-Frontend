import React from "react";

export default function WalletBox() {
  const usdtWallet = "TRpLX5VKC9HMCK8N7Btz3AUV6Nzxmvvie7";
  const adminEmail = "monetaictadmi@gmail.com";

  function copyWallet() {
    navigator.clipboard.writeText(usdtWallet);
    alert("Wallet address copied!");
  }

  return (
    <div className="card">
      <h3>💼 Deposit Wallets</h3>

      <div style={{ marginBottom: 12 }}>
        <strong>USDT (TRC20)</strong>
        <p style={{ wordBreak: "break-all" }}>{usdtWallet}</p>
        <button className="btn" onClick={copyWallet}>
          Copy Wallet
        </button>
      </div>

      <hr />

      <h4>🇱🇦 Latin America Methods</h4>
      <ul>
        <li>PIX (Brazil)</li>
        <li>SPEI (Mexico)</li>
        <li>PSE (Colombia)</li>
        <li>Bank Transfer (Argentina / Chile / Peru)</li>
      </ul>

      <p style={{ fontSize: 12, color: "#666" }}>
        After payment, email proof to:
        <br />
        <strong>{adminEmail}</strong>
      </p>
    </div>
  );
}