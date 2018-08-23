import api from '../../api/modules/updateOrderList'
// import router from '../../router'

const state = {
  delivered: false,
  removed: false
}

const actions = {
  deliverOrder ({ commit }, data) {
    if (data.id) {
      api.deliverOrder(data.id, data.status).then((Response) => {
        commit('SET_DELIVERED', true)
        location.reload()
      }).catch((err) => {
        console.log(err)
      })
    }
  },
  removeOrder ({ commit }, id) {
    if (id) {
      api.removeOrder(id).then((Response) => {
        commit('SET_REMOVED', true)
        location.reload()
      }).catch((err) => {
        console.log(err)
      })
    }
  }
}

const mutations = {
  SET_DELIVERED (state, delivered) {
    state.delivered = delivered
  },
  SET_REMOVED (state, removed) {
    state.removed = removed
  }
}

const getters = {
  getDelivery: state => {
    return state.delivered
  },
  getRemoved: state => {
    return state.removed
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
