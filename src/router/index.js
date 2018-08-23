import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Logout from '../views/Logout.vue'
import Order from '../views/Order'
import OrderList from '../views/OrderList'
import AddFood from '../views/Admin/AddFood'
import MyOrder from '../views/User/MyOrder'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        // This route needs auth
        requiresAuth: true,
        title: 'Home'
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        title: 'Login'
      }
    },
    {
      path: '/order',
      name: 'order',
      component: Order,
      meta: {
        // This route needs auth
        requiresAuth: true,
        title: 'Order'
      }
    },
    {
      path: '/orderList',
      name: 'orderList',
      component: OrderList,
      meta: {
        // This route needs auth
        requiresAuth: true,
        title: 'Order List'
      }
    },
    {
      path: '/addfood',
      name: 'Add Food',
      component: AddFood,
      meta: {
        // This route needs auth
        requiresAuth: true,
        title: 'Add Food'
      }
    },
    {
      path: '/myorder',
      name: 'My Order',
      component: MyOrder,
      meta: {
        // This route needs auth
        requiresAuth: true,
        title: 'My Order'
      }
    },
    {
      path: '/logout',
      name: 'Logout',
      component: Logout,
      meta: {
        // This route needs auth
        requiresAuth: true,
        title: 'Logout'
      }
    }
  ]
})
