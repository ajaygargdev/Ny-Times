import axios from "axios";
import { API_KEY, BASE_URL } from "../Constents/NyConstents";

const axiosClient = axios.create({
  baseURL: BASE_URL,
});

axiosClient.interceptors.request.use(
  (config) => {
    config.params = { ...config.params, "api-key": API_KEY };
    return config;
  },
);

export default axiosClient;
