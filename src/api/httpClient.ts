import axios from "axios";

export const api = axios.create({
    baseURL: "https://api.coingecko.com/api/v3",
    timeout: 10000,
});

api.interceptors.request.use(
    (config) => {
        console.log("Request:", config.url);
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    (response) => {
        console.log("Response:", response.config.url);
        return response;
    },
    (error) => {
        console.log("API Error:", error);
        return Promise.reject(error);
    }
);