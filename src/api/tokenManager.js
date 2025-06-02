// tokenManager.js
import axios from "axios";

let accessToken = null;
let tokenExpiresAt = null;
let lastRequestTime = 0;

const TOKEN_ENDPOINT = "https://api.realtyfeed.com/v1/auth/token";
const CLIENT_ID = process.env.REACT_APP_REALTY_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_REALTY_CLIENT_SECRET;
const MIN_INTERVAL = 2000;

export const getAccessToken = async () => {
  const now = Date.now();

  if (accessToken && tokenExpiresAt && now < tokenExpiresAt) {
    return accessToken;
  }

  const timeSinceLastRequest = now - lastRequestTime;
  if (timeSinceLastRequest < MIN_INTERVAL) {
    await new Promise((resolve) =>
      setTimeout(resolve, MIN_INTERVAL - timeSinceLastRequest)
    );
  }

  lastRequestTime = Date.now();

  try {
    const payload = new URLSearchParams();
    payload.append("client_id", CLIENT_ID);
    payload.append("client_secret", CLIENT_SECRET);
    // payload.append("grant_type", "client_credentials"); // adicione se necessário

    const response = await axios.post(TOKEN_ENDPOINT, payload.toString(), {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    const data = response.data;
    accessToken = data.access_token;

    tokenExpiresAt = now + (data.expires_in || 3600) * 1000;

    return accessToken;
  } catch (error) {
    console.error(
      "Failed to get token:",
      error.response?.data || error.message
    );
    throw error;
  }
};
