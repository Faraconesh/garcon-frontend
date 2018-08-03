import Vue from 'vue'
import Vuex from 'vuex'
import authModule from './modules/authModule'
import foodModule from './modules/foodModule'
import orderModule from './modules/orderModule'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css' // Ensure you are using css-loader

Vue.use(Vuetify)
Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    authModule,
    foodModule,
    orderModule
  },
  strict: debug
})
