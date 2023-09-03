import axios from "axios";

const http=axios.create({
    baseURL:"http://localhost:8087",
    headers:{"ContentType":"appllication/json"}
})
export default http;