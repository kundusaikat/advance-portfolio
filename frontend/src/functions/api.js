import axios from "axios";

export const BASE_URL = process.env.REACT_APP_DOMAIN;

export const normalAxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export const authenticatedAxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const handleErrorResponse = (error, setServerErrorMessage) => {
  if (error.response?.status === 401) {
    localStorage.removeItem("token");
    localStorage.removeItem("user_type");
    localStorage.removeItem("loggedInAlways");
    window.location.href = "/login";
  } else {
    if (![400, 401, 422, 403, 404, 426].includes(error.response?.status)) {
      setServerErrorMessage(
        "Unknown error: please try again later and contact tech support"
      );
    }
  }
  return error.response;
};

export const registerIntercepts = (setLoading = () => {}, setServerErrorMessage) => {
  authenticatedAxiosInstance.interceptors.response.use(
    (response) => response,
    (error) => handleErrorResponse(error, setServerErrorMessage)
  );
  authenticatedAxiosInstance.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("portfolio-token") || "";
      config.headers["Authorization"] = `Bearer ${token}`;
      return config;
    },
    (error) => Promise.reject(error)
  );
  normalAxiosInstance.interceptors.response.use(
    (response) => response,
    (error) => error.response
  );
  setLoading(false);
};
