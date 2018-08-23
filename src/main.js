import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueI18n from 'vue-i18n'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import { messages } from './assets/locale/translate'
import { numberFormats } from './assets/locale/numbers'
import { dateTimeFormats } from './assets/locale/datetime'

Vue.config.productionTip = false
Vue.use(VueI18n)

// Router Guard
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!store.state.authModule.token) {
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      })
    } else {
      next()
    }
  } else {
    next() // make sure to always call next()!
  }
})

// Change document title
router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

// Check if token is available in local storage, if it was, save it in vuex
if (window.localStorage) {
  let token = window.localStorage.getItem('user_token')
  if (token === '' || token === null || token === undefined) {
    store.commit('SET_TOKEN', '')
  } else {
    store.commit('SET_TOKEN', token)
  }
}

const i18n = new VueI18n({
  numberFormats,
  dateTimeFormats,
  locale: 'fa-IR', // set locale
  messages // set locale messages
})

Vue.use(Vuetify, {
  rtl: true,
  lang: {
    t: (key, ...params) => i18n.t(key, params)
  }
})

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
