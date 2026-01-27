import axios from "axios";

// 🔗 Backend base URL (Render)
const API = axios.create({
  baseURL: "https://moneta-ict.onrender.com",
});

// 🔐 Attach JWT token automatically
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

// =======================
// AUTH APIs
// =======================

export const registerUser = (data) => API.post("/api/register", data);

export const loginUser = (data) => API.post("/api/login", data);

export const getProfile = () => API.get("/api/profile");

// =======================
// PLANS + INVESTMENT APIs
// =======================

export const getPlans = () => API.get("/api/plans");

export const investInPlan = (planId, amount) =>
  API.post("/api/invest", { plan_id: planId, amount });

// =======================
// WALLET APIs
// =======================

export const getWallet = () => API.get("/api/wallet");

export const deposit = (amount, method) =>
  API.post("/api/deposit", { amount, method });

export const withdraw = (amount, method) =>
  API.post("/api/withdraw", { amount, method });

// =======================
// REFERRAL APIs
// =======================

export const getReferrals = () => API.get("/api/referrals");

// =======================
// TRANSACTIONS APIs
// =======================

export const getTransactions = () => API.get("/api/transactions");

// =======================
// ADMIN APIs
// =======================

export const getAllUsers = () => API.get("/api/admin/users");

export const getPendingPayments = () => API.get("/api/admin/pending");

export const approvePayment = (paymentId) =>
  API.post(`/api/admin/approve/${paymentId}`);

export const rejectPayment = (paymentId) =>
  API.post(`/api/admin/reject/${paymentId}`);

export default API;
