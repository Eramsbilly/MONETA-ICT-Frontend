const BASE_URL =
  process.env.REACT_APP_API_URL ||
  "https://moneta-ict-backend.onrender.com/api";

export async function apiRequest(
  endpoint,
  method = "GET",
  data = null
) {
  const token = localStorage.getItem("token");

  const res = await fetch(BASE_URL + endpoint, {
    method,
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
    },
    body: data ? JSON.stringify(data) : null,
  });

  if (!res.ok) {
    throw new Error("API error");
  }

  return res.json();
}