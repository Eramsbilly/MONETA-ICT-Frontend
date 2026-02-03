// src/api.js

// Base API URL (must include /api at the end)
const BASE_URL =
  process.env.REACT_APP_API_URL ||
  "https://moneta-ict-backend.onrender.com/api";

/**
 * Ensure endpoint always starts with "/"
 */
function normalizeEndpoint(endpoint) {
  if (!endpoint.startsWith("/")) {
    return `/${endpoint}`;
  }
  return endpoint;
}

/**
 * Core API Request Function
 * @param {string} endpoint
 * @param {string} method
 * @param {object|null} data
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

  // Attach JWT token if available
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  // Attach body for non-GET requests
  if (data && method !== "GET") {
    config.body = JSON.stringify(data);
  }

  try {
    const response = await fetch(url, config);

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
 * Convenience Helpers
 */

export const apiGet = (endpoint) =>
  apiRequest(endpoint, "GET");

export const apiPost = (endpoint, data) =>
  apiRequest(endpoint, "POST", data);

export const apiPut = (endpoint, data) =>
  apiRequest(endpoint, "PUT", data);

export const apiDelete = (endpoint) =>
  apiRequest(endpoint, "DELETE");

/**
 * 🔥 CRITICAL FIX
 * This prevents Railway build error:
 * "api is not exported from './api'"
 */
export const api = apiRequest;