import axios, { AxiosError, AxiosInstance, InternalAxiosRequestConfig } from 'axios';

// Create an Axios instance specifically for API calls

const axiosInstance: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL
});

// Add a request interceptor to insert the token into headers of all outgoing requests
axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    if (typeof window !== 'undefined') {
      const session = localStorage.getItem('session');
      if (session) {
        config.headers['Authorization'] = `Bearer ${session}`;
      }
    }
    return config;
  },
  (error: AxiosError) => Promise.reject(error)
);

export default axiosInstance;
