import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Auth/Login.vue'
import ChangePassword from '../views/Auth/ChangePassword'
import PasswordChanged from '../views/Auth/PasswordChanged'
import ForgetPassword from '../views/Auth/ForgetPassword.vue'
import EmailSent from '../views/Auth/EmailSent'
import Logout from '../views/Auth/Logout.vue'
import Order from '../views/Order'
import OrderList from '../views/OrderList'
import AddFood from '../views/Admin/AddFood'
import MyOrder from '../views/User/MyOrder'
import RestaurantMain from '../views/Restaurant/RestaurantMain'
import RestaurantMenu from '../views/Restaurant/RestaurantMenu'
import CategoryMain from '../views/Category/CategoryMain'
import CategoryMenu from '../views/Category/CategoryMenu'

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
      path: '/restaurantmenu',
      name: 'RestaurantMenu',
      component: RestaurantMenu,
      meta: {
        // This route needs auth
        requiresAuth: true,
        title: 'Restaurant Menu'
      }
    },
    {
      path: '/category',
      name: 'Category',
      component: CategoryMain,
      meta: {
        // This route needs auth
        requiresAuth: true,
        title: 'Category'
      }
    },
    {
      path: '/categorymenu',
      name: 'CategoryMenu',
      component: CategoryMenu,
      meta: {
        // This route needs auth
        requiresAuth: true,
        title: 'Category Menu'
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
      path: '/forgetpassword',
      name: 'ForgetPassword',
      component: ForgetPassword,
      meta: {
        title: 'Forget Password'
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
      path: '/passwordchanged',
      name: 'PasswordChanged',
      component: PasswordChanged,
      meta: {
        title: 'Password Changed'
      }
    },
    {
      path: '/changepassword',
      name: 'ChangePassword',
      component: ChangePassword,
      meta: {
        title: 'Change Password'
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
