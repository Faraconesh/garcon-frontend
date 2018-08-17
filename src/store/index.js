import Vue from 'vue'
import Vuex from 'vuex'
import authModule from './modules/authModule'
import foodModule from './modules/foodModule'
import orderModule from './modules/orderModule'
import orderListModule from './modules/orderListModule'
import updateOrderModule from './modules/updateOrderModule'
import logoutModule from './modules/logoutModule'
import addFoodModule from './modules/addFoodModule'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    authModule,
    foodModule,
    addFoodModule,
    orderModule,
    orderListModule,
    updateOrderModule,
    logoutModule
  },
  strict: debug
})
