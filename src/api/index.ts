import axios from "axios";

const service = axios.create({
  baseURL: "",
  timeout: 30000,
});

service.interceptors.request.use(
  (config) => {
    return config;
  },
  (error: any) => {
    Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response: any) => {
    const res = response;
    return Promise.resolve(res);
  },
  (error: any) => {
    return Promise.reject(error);
  }
);

export default service;
