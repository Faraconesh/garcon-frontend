import api from '../../api/modules/auth'
import router from '../../router'

const state = {
  token: '',
  username: ''
}

const actions = {
  // This action will get an auth array which contains username and password
  login ({ commit }, auth) {
    api.login(auth.username, auth.password).then((Response) => {
      window.localStorage.setItem('user_token', Response.data.key)
      commit('SET_TOKEN', Response.data.key)
      window.localStorage.setItem('user_name', auth.username)
      commit('SET_USERNAME', auth.username)
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
  },
  SET_USERNAME (state, username) {
    state.username = username
  }
}

const getters = {
  // Just return the token
  getUserToken: state => {
    return state.token
  },
  getUserName: state => {
    return state.username
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
