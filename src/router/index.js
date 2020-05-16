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
import store from '@/store/index.js'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
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
        next("/login")
      }
    }
  },
  {
    path: '/checkout',
    name: 'CheckOut',
    component: CheckOut,
    beforeEnter (to, from, next) {
      if(store.state.loggedIn) {
        next()
      } else {
        next("/login")
      }
    }
  },
  {
    path: '/payment',
    name: 'Payment',
    component: Payment,
    beforeEnter (to, from, next) {
      if(store.state.loggedIn) {
        next()
      } else {
        next("/login")
      }
    }
  },
  {
    path: '/saved',
    name: 'Saved',
    component: Saved,
    beforeEnter (to, from, next) {
      if(store.state.loggedIn) {
        next()
      } else {
        next("/login")
      }
    }
  },
  {
    path: '/orders',
    name: 'Orders',
    component: Orders,
    beforeEnter (to, from, next) {
      if(store.state.loggedIn) {
        next()
      } else {
        next("/login")
      }
    }
  },
  {
    path: '/changepass',
    name: 'ChangePassword',
    component: ChangePassword,
    // beforeEnter (to, from, next) {
    //   if(store.state.loggedIn) {
    //     next()
    //   } else {
    //     next("/login")
    //   }
    // }
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    beforeEnter (to, from, next) {
      if(store.state.loggedIn) {
        next()
      } else {
        next("/login")
      }
    }
  },
  {
    path: '/product/:id-:name',
    name: 'Product',
    component: Product
  },
  {
    path: '/category/:name',
    name: 'Category',
    component: Category
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
  routes
})

export default router
