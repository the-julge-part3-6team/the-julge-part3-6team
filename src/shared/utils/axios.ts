import { handleLogout } from '@/models/auth/logout';
import axios from 'axios';
import { error } from 'console';
import { Cookies } from 'react-cookie';

const cookies = new Cookies();

export const apiInstance = axios.create({
  baseURL: 'https://bootcamp-api.codeit.kr/api/5-6/the-julge',
});

apiInstance.interceptors.request.use(configOrigin => {
  const config = configOrigin;
  if (typeof window !== 'undefined') {
    const token = cookies.get('token');

    if (config.headers && token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }

  return config;
});

apiInstance.interceptors.response.use(
  configOrigin => {
    const config = configOrigin;

    return config;
  },
  error => {
    if (error.response && error.response.status === 401) {
      localStorage.clear();
      cookies.remove('token', { path: '/' });
      window.location.href = '/signin';
    }
  },
);

export const awsApiInstance = axios.create();

awsApiInstance.interceptors.request.use(config => {
  if (typeof window === 'undefined') return config;
  config.headers.Authorization = null;
  return config;
});
