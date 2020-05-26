import axios from 'axios'

const clientApi = axios.create({
    baseURL: 'https://shopman-backend.herokuapp.com/',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    }
})

export default {

    // register a user
    registerUser (userData) {
        return clientApi.post('/user', userData)
    },

    // logi a user
    loginUser (userData) {
        return clientApi.post('/login', userData)
    },

    // auth a user
    authUser () {
        return clientApi.post('/authuser')
    },

    // get wishlist
    getSavedProduct (user_id) {
        return clientApi.get(`/wishlist/${user_id}`)
    },

    // delete item from wishlist
    deleteSavedProduct (wishlist_id) {
        return clientApi.delete(`/wishlist/${wishlist_id}`)
    },

     // edit user address
     editUserAddress (user_id, data) {
        return clientApi.put(`/updateaddress/${user_id}`, data)
    },

    // add order
    makeOrder (orderData) {
        return clientApi.post('/order', orderData)
    },

    // account recovery
    accountRecovery (email) {
        return clientApi.post('/recover', email)
    },

    // get products
    getProducts () {
        return clientApi.get('products')
    },

    // get productsDetails
    getProductDetails (product_id) {
        return clientApi.get(`products/${product_id}`)
    },
    // get getCategoryProducts
    getCategoryProducts (category) {
        return clientApi.get(`product/${category}`)
    },
    // get getSearchProducts
    getSearchProducts (search) {
        return clientApi.get(`search/${search}`)
    }
    
}