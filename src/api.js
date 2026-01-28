const BASE_URL = "https://moneta-ict-backend.onrender.com/api";

export const api = async (endpoint, method = "GET", data = null, token = null) => {
  const res = await fetch(BASE_URL + endpoint, {
    method,
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` })
    },
    body: data ? JSON.stringify(data) : null
  });
  return res.json();
};
