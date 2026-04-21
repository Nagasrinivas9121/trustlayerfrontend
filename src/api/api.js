import axios from "axios";

// Using import.meta.env for Vite environment variables
const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "",
  headers: {
    "Content-Type": "application/json",
  },
});

export default API;
