import api from '../../api/mudules/order'
import router from '../../router'

const state = {
  delivered: false
}

const actions = {
  deliverOrder ({ commit }, id) {
    if (id) {
      api.deliverOrder(id).then((Response) => {
        commit('SET_DELIVERED', true)
        router.push('/')
      }).catch((err) => {
        console.log(err)
      })
    }
  }
}

const mutations = {
  SET_DELIVERED (state, delivered) {
    state.delivered = delivered
  }
}

const getters = {
  getDelivery: state => {
    return state.delivered
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
