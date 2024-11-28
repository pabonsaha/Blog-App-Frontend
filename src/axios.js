import axios from "axios";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = import.meta.env.VITE_APP_API_URL;
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';