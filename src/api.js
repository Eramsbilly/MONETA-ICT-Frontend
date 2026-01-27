const BASE_URL = "https://moneta-ict-backend.onrender.com";

export const API = {
  register: async (email, password, ref) => {
    const res = await fetch(`${BASE_URL}/api/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, ref }),
    });
    return res.json();
  },

  login: async (email, password) => {
    const res = await fetch(`${BASE_URL}/api/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    return res.json();
  },

  dashboard: async (token) => {
    const res = await fetch(`${BASE_URL}/api/dashboard`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.json();
  },

  invest: async (token, plan_id, amount) => {
    const res = await fetch(`${BASE_URL}/api/invest`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ plan_id, amount }),
    });
    return res.json();
  },

  withdraw: async (token, amount, method) => {
    const res = await fetch(`${BASE_URL}/api/withdraw`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ amount, method }),
    });
    return res.json();
  },

  referrals: async (token) => {
    const res = await fetch(`${BASE_URL}/api/referrals`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.json();
  },
};

export default API;
