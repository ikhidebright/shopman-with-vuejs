import Vue from 'vue'
import Vuex from 'vuex'
import clientApi from '@/Services/EventService.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cart: [],
    loggedIn: false,
    searchProducts: [],
    savedProducts: [],
    userOrders: [],
    categoryProducts: [],
    productDetails: [],
    successAlertMessage: null,
    user: null,
    homepageProducts: [],
    url: "https://shopman-backend.herokuapp.com/",
    showSuccessAlert: false,
    errorAlertMessage: null,
    showErrrorAlert: false,
  },
  mutations: {
    // set categoryProducts
    setCategoryProducts(state, item) {
      state.categoryProducts = item
    },
    setCart(state, item) {
      state.cart.unshift(item)
      localStorage.setItem("cart", JSON.stringify(state.cart))
    },
    // set cart on reload
    setCartReload(state, item) {
      state.cart = item
    },
     // set product details
     setProductDetails(state, item) {
      state.productDetails = item
    },
    // set cart after removing item
    setRemoveItemCart(state, item) {
      state.cart = item
      localStorage.setItem("cart", JSON.stringify(state.cart))
    },
     // set saved product
     setSavedProducts(state, item) {
      state.savedProducts = item
    },
    // set success message
    setSuccessAlert (state, item) {
      state.successAlertMessage = item.successMessage
      state.showSuccessAlert = item.showSuccess
    },
    // set error message
    setErrorAlert (state, item) {
      state.errorAlertMessage = item.errorMessage
      state.showErrrorAlert = item.showError
    },
    // set homepage Products
    setHomepageProducts(state, item) {
      state.homepageProducts = item
    },
    // set User Orders
    setUserOrder(state, item) {
      state.userOrders = item
    },
    // set search Products
    setSearchProducts(state, item) {
      state.searchProducts = item
    },
    // set user
    setUser (state, item) {
      state.user = item
      if (state.user) {
        state.loggedIn = true
      } else {
        state.loggedIn = false
      }
    }
  },
  getters: {
    // calculate total quantity in cart
    getCartQty (state) {
      if (state.cart.length < 1) {
        return 0
      } else {
        let totalQuantity = []
               state.cart.forEach((item) => {
               totalQuantity.push(item.quantity)
        })
        let total = totalQuantity.reduce((a, b) => {
          return a + b
        })
        return total
      }
    },

    // calculate total price
    getTotalPrice (state) {
      if (state.cart.length < 1) {
        return 0
      } else {
        let totalPrice = []
               state.cart.forEach((item) => {
               totalPrice.push(item.subTotal)
        })
        let totalP = totalPrice.reduce((a, b) => {
          return a + b
        })
        return totalP
      }
    },

    // get dynamic Homepage products
    products: (state) => (category) => {
      let items = state.homepageProducts.filter((item) => {
        return item.category.toLowerCase() == category.toLowerCase()
      })
      return items;
    },

    // get search products that are already loaded 
    getSearchProducts: (state) => (product) => {
      let items = state.homepageProducts.filter((item) => {
        return item.category.toLowerCase().includes(product.toLowerCase()) || item.name.toLowerCase().includes(product.toLowerCase())
      })
      return items;
    }
  },
  actions: {
    // Order from API
    async setUserOrderDB({ state, commit}) {
      let saved = await clientApi.getProducts()
      commit("setUserOrder", saved.data)
    },
    // Set order from local
    async setUserOrderLocal({ commit}, payload) {
      commit("setUserOrder", payload.orders)
    },
    async setWishlist({ state, commit}) {
      let saved = await clientApi.getSavedProduct(state.user.id)
      commit("setSavedProducts", saved.data)
    },
    //show error
      setLoginError ({ commit }, payload) {
      let item = {
        errorMessage: payload.message,
        showError: payload.show
      }
      commit("setErrorAlert", item)
    },
    //show success
      setSuccessPage ({ commit }, payload) {
      let item = {
        successMessage: payload.message,
        showSuccess: payload.show
      }
      commit("setSuccessAlert", item)
    },
    async accountRecovery({ state, commit}, payload) {
      let saved = await clientApi.accountRecovery(payload.email)
      console.log(saved)
    },
    async addOrder({ state }, order) {
      let saved = await clientApi.makeOrder(order)
    },
    async logOutUser ({ commit, state}) {
      commit("setUser", null)
    },
    async setHomepageProducts({ state, commit}) {
      let saved = await clientApi.getProducts()
      commit("setHomepageProducts", saved.data)
    },
    async setCategoryProducts({ state, commit}, payload) {
      let saved = await clientApi.getCategoryProducts(payload.category)
      commit("setCategoryProducts", saved.data)
    },
    // setSearchProducts
    async setSearchProducts({ state, commit, getters}, payload) {
      if (state.homepageProducts.length > 0) {
       let item = await getters.getSearchProducts(payload.search)
       commit("setSearchProducts", item)
      } else {
        // let saved = await clientApi.getCategoryProducts(payload.category)
        // commit("setSearchProducts", saved.data)
        console.log("get search products from API call")
      }
    },
    async setProductDetails ({ state, commit}, payload) {
      let saved = await clientApi.getProductDetails(payload.product_id)
      commit("setProductDetails", saved.data)
    },
  },
  modules: {
  }
})
