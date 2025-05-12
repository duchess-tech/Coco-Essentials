import axios from "axios";
const httpAuth = axios.create({
  baseURL: `https://coco-essentials-api.onrender.com`, 
  // baseURL: `http://localhost:4000`,
  // baseURL: `https://radiant-whispersstore.onrender.com`,

headers: {
    "Content-Type": "application/json",
  }
  
});


export default httpAuth;