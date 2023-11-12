import axios from "axios"

const api = axios.create({
    baseURL: "https://sistema-faculdade-dom-bosco.vercel.app/validation/"
});

export default api;