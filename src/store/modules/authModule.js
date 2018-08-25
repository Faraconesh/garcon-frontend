import api from '../../api/modules/auth'
import router from '../../router'

const state = {
  token: '',
  username: '',
  passwordchanged: false,
  emailsent: false
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
      location.reload()
    }).catch((err) => {
      console.log(err)
    })
  },
  changepassword ({ commit }, auth) {
    api.changepassword(auth.newpassword1, auth.newpassword2).then((Response) => {
      commit('SET_PASSWORDCHANGED', true)
      router.push('/passwordchanged')
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
  },
  SET_PASSWORDCHANGED (state, passwordchanged) {
    state.passwordchanged = passwordchanged
  },
  SET_EMAILSENT (state, emailsent) {
    state.emailsent = emailsent
  }
}

const getters = {
  // Just return the token
  getUserToken: state => {
    return state.token
  },
  getUserName: state => {
    return state.username
  },
  getPasswordChanged: state => {
    return state.passwordchanged
  },
  getEmailSent: state => {
    return state.emailsent
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
