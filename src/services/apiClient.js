import axios from 'axios';
import { API_BASE_URL } from '../config/constants';

/**
 * Shared axios instance for all API calls.
 * Centralizes base URL, timeout, and error normalization.
 */
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10_000,
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const message = error.response?.data?.message || error.message || 'Unexpected API error';
    return Promise.reject(new Error(message));
  }
);

export default apiClient;
