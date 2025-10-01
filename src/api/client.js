import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "/api", // fallback local proxy
  withCredentials: true, // nếu cần cookie
});

// Interceptor response
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      try {
        // gọi refresh token nếu có
        await api.post("/auth/refresh");
      } catch (refreshErr) {
        // Nếu refresh fail → redirect login
        window.location.href = "/login";
        return Promise.reject(refreshErr);
      }
    }
    return Promise.reject(error);
  }
);

export default api;
