import axios from 'axios';

export const apiInstance = axios.create({
  baseURL: 'https://bootcamp-api.codeit.kr/api/5-6/the-julge',
});

apiInstance.interceptors.request.use(configOrigin => {
  const config = configOrigin;
  if (typeof window !== 'undefined') {
    const cookies = document.cookie;
    const [_, token] = cookies.split('=');
    if (config.headers && token !== undefined) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    if (localStorage.getItem('hasImage')) {
      config.headers.Authorization = null;
      localStorage.removeItem('hasImage');
    }
  }

  return config;
});

// export const awsApiInstance = axios.create();

// awsApiInstance.interceptors.request.use(config => {
//   if (typeof window === 'undefined') return config;
//   config.headers.Authorization = null;
//   return config;
// });
