import axios from "axios"

const api = axios.create({
    baseURL: "https://db-json-8k51.onrender.com/products/"
});

export default api;