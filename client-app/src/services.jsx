import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "/api",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json"
  }
});
const setToken = (token = null) =>
  (axiosInstance.defaults.headers.common["Authorization"] = token
    ? `Bearer ${token}`
    : "");

const responseData = res => res.data;

const requests = {
  post: (url, body) => axiosInstance.post(`${url}`, body).then(responseData)
};

const Auth = {
  currentUser: () => requests.get("/user"),
  login: (email, password) =>
    requests.post("/users/login", { user: { email, password } }),
  register: (username, email, password) =>
    requests.post("/users", { user: { username, email, password } }),
  save: user => requests.put("/user", { user })
};

export default {
  Auth
};