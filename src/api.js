const BASE_URL = process.env.REACT_APP_API_URL;

export async function api(path, method = "GET", data, token) {
  const res = await fetch(`${BASE_URL}${path}`, {
    method,
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` })
    },
    body: data ? JSON.stringify(data) : null
  });
  return res.json();
}