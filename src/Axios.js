import axios from "axios";

export const makeRequest = axios.create({
    baseURL : "https://tseclapi.deosoft.in/api/",
    withCredentials: false,
});