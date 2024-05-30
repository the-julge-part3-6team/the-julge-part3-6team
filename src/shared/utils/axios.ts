import axios from "axios";

const apiInstance = axios.create({
  baseURL: "https://bootcamp-api.codeit.kr/api/5-6/the-julge",
  withCredentials: true,
});

apiInstance.interceptors.request.use((configOrigin) => {
  const config = configOrigin;
  const accessToken = localStorage.getItem("access_token");

  if (config.headers && accessToken !== null) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});

apiInstance.interceptors.response.use(
  (response) => {
    console.debug(response);
    return response;
  },
  (error) => {
    console.error(error);
  }
);
