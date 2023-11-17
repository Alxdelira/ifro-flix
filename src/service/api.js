import axios from "axios";

export function setupAPIClient(ctx) {
    const api = axios.create({
        baseURL:"http://localhost:1337/api/",
        headers: {
            Accept: "application/json"
        }
    });

    return api;
}