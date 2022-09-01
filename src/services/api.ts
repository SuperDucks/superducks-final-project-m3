import axios from "axios"; 

export const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  timeout: 5000,
});
export const userAPI = axios.create({
  baseURL: "https://final-project-m3.herokuapp.com",
  timeout: 5000,
})



// apikey ffbfd65ffec7d7be7f2df127feb18d85
