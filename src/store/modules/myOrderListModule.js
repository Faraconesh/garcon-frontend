import api from '../../api/modules/myOrderList'

const state = {
  myOrderList: [],
  removedmyOrderList: false
}

const actions = {
  // This action will get an auth array which contains username and password
  getMyOrderList ({ commit }) {
    api.getMyOrderList().then((Response) => {
      commit('SET_MYORDERS', Response.data)
    }).catch((err) => {
      console.log(err)
    })
  },
  removeMyOrderList ({ commit }, id) {
    api.removeMyOrderList(id).then((Response) => {
      commit('SET_REMOVEEDMYORDERS', 'true')
      location.reload()
    }).catch((err) => {
      console.log(err)
    })
  }
}

const mutations = {
  // Nothing yet
  SET_MYORDERS (state, myOrderList) {
    state.myOrderList = myOrderList
  },
  SET_REMOVEEDMYORDERS (state, removedmyOrderList) {
    state.removedmyOrderList = removedmyOrderList
  }
}

const getters = {
  // ?
  getMyOrderList: state => {
    return state.myOrderList
  },
  removedMyOrderList: state => {
    return state.removedmyOrderList
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
