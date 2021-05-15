import axios from 'axios'
import { parseCookies } from 'nookies';

let cookies = parseCookies();

export const api = axios.create({
    baseURL: '/api',
    headers: {
        Authorization: `Bearer ${cookies['nextauth.token']}`,
    }
})