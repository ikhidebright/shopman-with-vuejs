import axios from 'axios'

const clientApi = axios.create({
    baseURL: '//localhost:6060',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    }
})

export default {
    registerUser (userData) {
        return clientApi.post('/user', userData)
    },
    loginUser (userData) {
        return clientApi.post('/login', userData)
    },
    authUser () {
        return clientApi.post('/authuser')
    },
    getSavedProduct (user_id) {
        return clientApi.get(`/wishlist/${user_id}`)
    },
    deleteSavedProduct (wishlist_id) {
        return clientApi.delete(`/wishlist/${wishlist_id}`)
    }
}