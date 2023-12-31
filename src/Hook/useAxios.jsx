import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'http://localhost:5200'
})
const useAxios = () => {
    return axiosPublic;
};

export default useAxios;