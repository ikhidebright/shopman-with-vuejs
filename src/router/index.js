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

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/checkout',
    name: 'CheckOut',
    component: CheckOut 
  },
  {
    path: '/saved',
    name: 'Saved',
    component: Saved
  },
  {
    path: '/orders',
    name: 'Orders',
    component: Orders
  },
  {
    path: '/changepass',
    name: 'ChangePassword',
    component: ChangePassword
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/product/:id-:name',
    name: 'Product',
    component: Product
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
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
