import axios from "axios";

const API = axios.create({
  baseURL: "https://moneta-ict.onrender.com/api",
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const login = (data) => API.post("/login", data);
export const register = (data) => API.post("/register", data);
export const getDashboard = () => API.get("/dashboard");

export const invest = (plan_id) =>
  API.post("/invest", { plan_id });

export const withdraw = (amount) =>
  API.post("/withdraw", { amount });

export const getHistory = () => API.get("/history");
export const getReferrals = () => API.get("/referrals");

export default API;
