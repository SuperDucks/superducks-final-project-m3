import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default api;

// apikey ffbfd65ffec7d7be7f2df127feb18d85
