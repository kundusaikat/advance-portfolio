import { normalAxiosInstance as axios } from "./api";

export const backendConnect = () => axios.get("/");

export const visitorCount = () => axios.get(`/visitors`);
