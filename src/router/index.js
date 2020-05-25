import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Product from '../views/Product.vue'
import Cart from '../views/Cart.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Dashboard from '../views/Dashboard.vue'
import ChangePassword from '../views/ChangePassword.vue'
import Orders from '../views/Orders.vue'
import Saved from '../views/Saved.vue'
import CheckOut from '../views/CheckOut.vue'
import Payment from '../views/Payment.vue'
import Address from '../views/Address.vue'
import Category from '../views/Category.vue'
import Recover from '../views/Recover.vue'
import Search from '../views/Search.vue'
import store from '@/store/index.js'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/search',
    name: 'Search',
    component: Search,
    props: (route) => ({ query: route.query.q })
  },
  {
    path: '/recover',
    name: 'Recover',
    component: Recover
  },
  {
    path: '/address',
    name: 'Address',
    component: Address,
    beforeEnter (to, from, next) {
      if(store.state.loggedIn) {
        next()
      } else {
        next({
          path: '/login',
          query: {
             r: to.fullPath,
          }
      })
        store.dispatch({
          type: "setLoginError",
          message: "Sorry You Have to Login First",
          show: true
        })
      }
    }
  },
  {
    path: '/checkout',
    name: 'CheckOut',
    component: CheckOut,
    beforeEnter (to, from, next) {
      if (store.state.cart.length > 0) {
        if(store.state.loggedIn) {
          next()
        } else {
          next({
            path: '/login',
            query: {
               r: to.fullPath,
            }
        })
          store.dispatch({
            type: "setLoginError",
            message: "Sorry You Have to Login First",
            show: true
          })
        }
      } else {
        next("/cart")
      }
    }
  },
  {
    path: '/payment',
    name: 'Payment',
    component: Payment,
    beforeEnter (to, from, next) {
      if (store.state.cart.length > 0) {
        if(store.state.loggedIn) {
          next()
        } else {
          next({
            path: '/login',
            query: {
               r: to.fullPath,
            }
        })
          store.dispatch({
            type: "setLoginError",
            message: "Sorry You Have to Login First",
            show: true
          })
        }
      } else {
        next("/cart")
      }
    }
  },
  {
    path: '/saved',
    name: 'Saved',
    component: Saved,
    async beforeEnter (to, from, next) {
      if(store.state.loggedIn || store.state.user) {
        store.dispatch("setWishlist")
        next()
      } else {
        next({
          path: '/login',
          query: {
             r: to.fullPath,
          }
      })
        store.dispatch({
          type: "setLoginError",
          message: "Sorry You Have to Login First",
          show: true
        })
      }
    }
  },
  {
    path: '/orders',
    name: 'Orders',
    component: Orders,
    beforeEnter (to, from, next) {
      if(store.state.loggedIn) {
        store.dispatch("setWishlist")
        next()
      } else {
        next({
          path: '/login',
          query: {
             r: to.fullPath,
          }
      })
        store.dispatch({
          type: "setLoginError",
          message: "Sorry You Have to Login First",
          show: true
        })
      }
    }
  },
  {
    path: '/changepass',
    name: 'ChangePassword',
    component: ChangePassword,
    beforeEnter (to, from, next) {
      if(store.state.loggedIn) {
        next()
      } else {
        next({
          path: '/login',
          query: {
             r: to.fullPath,
          }
      })
        store.dispatch({
          type: "setLoginError",
          message: "Sorry You Have to Login First",
          show: true
        })
      }
    }
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    beforeEnter (to, from, next) {
      if(store.state.loggedIn) {
        next()
      } else {
        next({
          path: '/login',
          query: {
             r: to.fullPath,
          }
      })
        store.dispatch({
          type: "setLoginError",
          message: "Sorry You Have to Login First",
          show: true
        })
      }
    }
  },
  {
    path: '/product/:id-:name',
    name: 'Product',
    component: Product,
    beforeEnter: (to, from, next) => {
      store.dispatch({
        type: "setProductDetails",
        product_id: to.params.id
      })
      next()
    }
  },
  {
    path: '/category/:name',
    name: 'Category',
    component: Category,
    async beforeEnter (to, from, next) {
      let check = await store.state.homepageProducts.length > 0;
      if (check) {
        let categoryItems = await store.getters.products(to.params.name.replace(/[-]+/g," ").toLowerCase())
        await store.commit("setCategoryProducts", categoryItems)
        next()
      } else {
        await store.dispatch({
          type: "setCategoryProducts",
          category: to.params.name.replace(/[-]+/g," ")
        })
        next()
      }
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    beforeEnter (to, from, next) {
      if(store.state.loggedIn) {
        next("/dasboard")
      } else {
        next()
      }
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    beforeEnter (to, from, next) {
      if(store.state.loggedIn) {
        next("/dasboard")
      } else {
        next()
      }
    }
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    document.getElementById('app').scrollIntoView();
}
})

export default router
