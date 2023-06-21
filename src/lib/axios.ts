import axios from "axios";
const BASE_BACKEND_URL="http://127.0.0.1:3001"
export default axios.create({
    baseURL: BASE_BACKEND_URL,
    headers: {"Content-Type": "application/json"}
})


export const axiosAuth = axios.create({
    baseURL: BASE_BACKEND_URL,
    headers: {"Content-Type": "application/json"}
})
