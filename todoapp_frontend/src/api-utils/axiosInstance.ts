const backendUrl = import.meta.env.VITE_BACKEND_URL;

import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: `${backendUrl}/api/v1`,
    headers: {
        'Content-Type': 'application/json',
    },
});

