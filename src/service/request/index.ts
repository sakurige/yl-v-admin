import type { AxiosInstance, AxiosRequestConfig } from "axios";
import axios from "axios";
import { BASE_URL } from "./config/config";

class Request {
  instance: AxiosInstance;

  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config);
  }

  request(config: AxiosRequestConfig) {
    return this.instance.request(config);
  }

  post(config: AxiosRequestConfig) {
    return this.request({ ...config, method: "post" });
  }

  get(config: AxiosRequestConfig) {
    return this.request({ ...config, method: "get" });
  }
}

export default new Request({
  baseURL: BASE_URL,
});
