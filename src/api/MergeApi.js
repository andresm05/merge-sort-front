import axios from 'axios';

const {VITE_API_URL} = import.meta.env;

export const MergeApi = axios.create({
    baseURL: VITE_API_URL,
});

MergeApi.interceptors.request.use( config => {

    config.headers = {
        ...config.headers,
        'x-token': localStorage.getItem('token')
    }

    return config;
});

export default MergeApi;