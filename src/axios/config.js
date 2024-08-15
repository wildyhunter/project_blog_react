import axios from "axios";

const blogFatch = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    headers: {
        aplication: "application/json"
    }
});

export default blogFatch