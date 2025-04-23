import axios from "axios"

const baseURL = 'https://youtubebackend-0s8q.onrender.com/api/v1' 

export const axiosInstance = axios.create({
    baseURL,
    withCredentials: true
});