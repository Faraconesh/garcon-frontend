import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Auth/Login.vue'
import ChangePassword from '../views/Auth/ChangePassword.vue'
import EmailSent from '../views/Auth/EmailSent'
import Logout from '../views/Auth/Logout.vue'
import Order from '../views/Order'
import OrderList from '../views/OrderList'
import AddFood from '../views/Admin/AddFood'
import MyOrder from '../views/User/MyOrder'
import RestaurantMain from '../views/Restaurant/Main'

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
      path: '/restaurant',
      name: 'Restaurant',
      component: RestaurantMain,
      meta: {
        // This route needs auth
        requiresAuth: true,
        title: 'Restaurant'
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
      path: '/changepassword',
      name: 'changepassword',
      component: ChangePassword,
      meta: {
        title: 'Change Password'
      }
    },
    {
      path: '/emailsent',
      name: 'emailsent',
      component: EmailSent,
      meta: {
        title: 'Email Sent'
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
