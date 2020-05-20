import Vue from 'vue'
import Vuex from 'vuex'
import clientApi from '@/Services/EventService.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cart: [],
    loggedIn: false,
    savedProducts: [],
    productDetails: [],
    successAlertMessage: null,
    user: null,
    homepageProducts: [],
    url: "http://localhost:6060",
    showSuccessAlert: false,
    errorAlertMessage: null,
    showErrrorAlert: false,
  },
  mutations: {
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
        return item.category == category
      })
      return items;
      console.log(category)
    }
  },
  actions: {
    async setWishlist({ state, commit}) {
      let saved = await clientApi.getSavedProduct(state.user.id)
      commit("setSavedProducts", saved.data)
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
    async setProductDetails ({ state, commit}, payload) {
      let saved = await clientApi.getProductDetails(payload.product_id)
      commit("setProductDetails", saved.data)
    },
  },
  modules: {
  }
})
