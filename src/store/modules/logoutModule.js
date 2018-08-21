import router from '../../router'
import auth from './authModule'

const actions = {
  // This action will get an auth array which contains username and password
  logout ({ commit }) {
    window.localStorage.removeItem('user_token')
    commit('CLEAR_TOKEN', '')
    window.localStorage.removeItem('user_name')
    commit('CLEAR_USERNAME', '')
    location.reload()
    router.push('/login')
  }
}

const mutations = {
  // This mutation gets a token and set it to state
  CLEAR_TOKEN (token) {
    auth.state.token = token
  },
  CLEAR_USERNAME (username) {
    auth.state.token = username
  }
}

export default {
  actions,
  mutations
}
