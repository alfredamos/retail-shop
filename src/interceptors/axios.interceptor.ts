import axios from "axios";
import { useAuthStore } from "@/stores/useAuthStore";

//----> Default config options
const defaultOptions = {
  baseURL: "http://localhost:5000/api",
  headers: {
    "Content-Type": "application/json",
  },
};

//----> Create instance
const instance = axios.create(defaultOptions);

//----> Set the AUTH token for any request
instance.interceptors.request.use(function (config) {
  const authStore = useAuthStore();
  const token = authStore?.token;
  console.log("In interceptor - token : ", token);
  config.headers.Authorization = `Bearer ${token}`;

  return config;
});

//----> Response interceptor.
instance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log(error);
    console.log("In response-interceptor,  response : ", error);
    /* if (error?.response?.status === 401) {
      console.log("Invalid credentials or expired token, please login!");
      localStorage.removeItem("auth");
      window.location.href = "/must-login";
    }
    if (error?.response?.status === 403) {
      console.log("You are not authorized to view this page, please login!");
      localStorage.removeItem("auth");
      window.location.href = "/not-allowed";
    }
    localStorage.removeItem("auth");
    window.location.href = "/logout"; */
  }
);

export default instance;
