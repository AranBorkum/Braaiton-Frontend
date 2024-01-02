import axios from "axios";

export const HTTPClient = axios.create({
    baseURL: "http://127.0.0.1:8000",
    xsrfCookieName: 'csrftoken',
    xsrfHeaderName: 'X-CSRFToken',
    withCredentials: true
});