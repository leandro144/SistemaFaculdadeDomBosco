import axios from "axios"

const api = axios.create({
    baseURL: "https://json-diploma.onrender.com/diploma/"
});

export default api;