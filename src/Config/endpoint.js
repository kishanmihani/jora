import axios from "axios";

export const loginapi='/auth/login';
export const productlistapi='https://dummyjson.com/products'
export const authAxios = axios.create({
    baseURL:'https://dummyjson.com',
    // headers:{Authorization:localStorage.refreshToken}
})
export const staticlocal=window.location.host === 'localhost:3000'