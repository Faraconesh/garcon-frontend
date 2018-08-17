import api from '../../api/modules/orderList'

const state = {
  orderList: []
}

const actions = {
  // This action will get an auth array which contains username and password
  getOrderList ({ commit }) {
    api.getOrderList().then((Response) => {
      commit('SET_ORDERS', Response.data)
    }).catch((err) => {
      console.log(err)
    })
  }
}

const mutations = {
  // Nothing yet
  SET_ORDERS (state, orderList) {
    state.orderList = orderList
  }
}

const getters = {
  // ?
  getOrders: state => {
    return state.orderList
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
