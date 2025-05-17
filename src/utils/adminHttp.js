import axios from "axios";


const http = axios.create({
  // baseURL: `http://localhost:4000`, 
  baseURL: import.meta.env.VITE_API_URL, 
  withCredentials: true
});




let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, token = null) => {
  failedQueue.forEach(prom => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });

  failedQueue = [];
};

const refreshToken = async () => {
  try {
    const refreshToken = localStorage.getItem("refreshToken");
    if (!refreshToken) {
      throw new Error("No refresh token available");
    }

    const response = await axios.post(`${import.meta.env.VITE_API_URL}/user/refresh-token`, { refreshToken });
    if (response.status === 200) {
      const { accessToken, refreshToken: newRefreshToken } = response.data;
      localStorage.setItem("token", accessToken);
      localStorage.setItem("refreshToken", newRefreshToken);
      return accessToken;
    }
  } catch (error) {
    console.error("Error refreshing token", error);
    throw error;
  }
};

http.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem("token");
    
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

http.interceptors.response.use(
  response => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response && error.response.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        }).then(token => {
          originalRequest.headers['Authorization'] = 'Bearer ' + token;
          return axios(originalRequest);
        }).catch(err => {
          return Promise.reject(err);
        });
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        const newToken = await refreshToken();
        processQueue(null, newToken);
        originalRequest.headers['Authorization'] = 'Bearer ' + newToken;
        return axios(originalRequest);
      } catch (err) {
        processQueue(err, null);
        return Promise.reject(err);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  }
)







  export default http;