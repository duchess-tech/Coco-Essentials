import axios from "axios";
const httpAuth = axios.create({
  baseURL: `https://2961-129-205-124-203.ngrok-free.app`,
  // baseURL: `https://radiant-whispersstore.onrender.com`,

  headers: {
    // "Content-Type": "multipart/form-data",
    "Content-Type": "application/json",
    // 'Accept': 'application/json',
  }
//   ,
//   credentials: 'include', 
});

// httpAuth.interceptors.request.use(
//   (config) => {
//     const token = JSON.parse(localStorage.getItem("token"));
//     if (token) {
//       config.headers["Authorization"] = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error),
// );
export default httpAuth;