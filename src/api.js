// src/api.js

// Base API URL (must include /api at the end)
const BASE_URL =
  process.env.REACT_APP_API_URL ||
  "https://moneta-ict-backend.onrender.com/api";

/**
 * Normalize endpoint to always start with /
 */
function normalizeEndpoint(endpoint) {
  if (!endpoint.startsWith("/")) {
    return `/${endpoint}`;
  }
  return endpoint;
}

/**
 * Core API request function
 * @param {string} endpoint - API endpoint (example: "/auth/login")
 * @param {string} method - HTTP method
 * @param {object|null} data - request body
 * @returns {Promise<object>}
 */
export async function apiRequest(endpoint, method = "GET", data = null) {
  const token = localStorage.getItem("token");

  const url = `${BASE_URL}${normalizeEndpoint(endpoint)}`;

  const config = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
  };

  // Attach token if available
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  // Attach body for non-GET requests
  if (data && method !== "GET") {
    config.body = JSON.stringify(data);
  }

  try {
    const response = await fetch(url, config);

    // Safely parse response
    const text = await response.text();
    let result;

    try {
      result = text ? JSON.parse(text) : {};
    } catch {
      result = { message: text };
    }

    if (!response.ok) {
      throw new Error(result?.message || "API request failed");
    }

    return result;
  } catch (error) {
    console.error("API ERROR:", error.message);
    throw error;
  }
}

/**
 * Convenience helpers (optional but clean)
 */

export const apiGet = (endpoint) =>
  apiRequest(endpoint, "GET");

export const apiPost = (endpoint, data) =>
  apiRequest(endpoint, "POST", data);

export const apiPut = (endpoint, data) =>
  apiRequest(endpoint, "PUT", data);

export const apiDelete = (endpoint) =>
  apiRequest(endpoint, "DELETE");