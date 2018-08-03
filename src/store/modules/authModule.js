import api from '../../api/mudules/auth'
import router from '../../router'

const state = {
  token: ''
}

const actions = {
  // This action will get an auth array which contains username and password
  login ({ commit }, auth) {
    api.login(auth.username, auth.password).then((Response) => {
      window.localStorage.setItem('user_token', Response.data.key)
      commit('SET_TOKEN', Response.data.key)
      router.push('/')
    }).catch((err) => {
      console.log(err)
    })
  }
}

const mutations = {
  // This mutation gets a token and set it to state
  SET_TOKEN (state, token) {
    state.token = token
  }
}

const getters = {
  // Just return the token
  getUserToken: state => {
    return state.token
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
