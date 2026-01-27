// src/api.js

const API_BASE = "https://moneta-ict.onrender.com/api";

// ---------------- AUTH ----------------
export async function registerUser(data) {
  const res = await fetch(`${API_BASE}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function loginUser(data) {
  const res = await fetch(`${API_BASE}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

// ---------------- DASHBOARD ----------------
export async function getDashboard(token) {
  const res = await fetch(`${API_BASE}/dashboard`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.json();
}

// ---------------- INVEST ----------------
export async function investPlan(token, planId, amount) {
  const res = await fetch(`${API_BASE}/invest`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ plan_id: planId, amount }),
  });
  return res.json();
}

// ---------------- WITHDRAW ----------------
export async function withdrawFunds(token, amount, method) {
  const res = await fetch(`${API_BASE}/withdraw`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ amount, method }),
  });
  return res.json();
}

// ---------------- REFERRALS ----------------
export async function getReferrals(token) {
  const res = await fetch(`${API_BASE}/referrals`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.json();
}

// ---------------- ADMIN ----------------
export async function getAdminDashboard(token) {
  const res = await fetch(`${API_BASE}/admin/dashboard`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.json();
}

export async function getAdminPayments(token) {
  const res = await fetch(`${API_BASE}/admin/payments`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.json();
}
