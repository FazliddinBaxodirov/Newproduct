import axios from "axios";
import.meta.env.VITE_API
export const useAxios = () => axios.create({baseURL:import.meta.env.VITE_API})