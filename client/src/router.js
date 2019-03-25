import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import MemberArea from './views/Member.vue'
import DashboardPage from './views/Dashboard.vue'
import AddProduct from './views/AddProduct.vue'
import ProductPage from './views/ProductPage.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/member',
      name: 'MemberArea',
      component: MemberArea
    },
    {
      path: '/dashboard',
      name: 'DashboardPage',
      component: DashboardPage
    },
    {
      path: '/addproduct',
      name: 'AddProduct',
      component: AddProduct
    },
    {
      path: '/product/:id/:productname',
      name: 'ProductPage',
      component: ProductPage
    }
  ]
})
