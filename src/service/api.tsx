import axios from "axios";

export const BASE_URL = `http://10.0.2.2:3000/`;

const api = axios.create({
  baseURL: BASE_URL,
});

export default api;
