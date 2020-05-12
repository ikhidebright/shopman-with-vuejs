import axios from 'axios'

const clientApi = axios.create({
    baseURL: '//localhost:6060',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    registerUser (userData) {
        return clientApi.post('/user', userData)
    },
    loginUser (userData) {
        return clientApi.post('/login', userData)
    }
}