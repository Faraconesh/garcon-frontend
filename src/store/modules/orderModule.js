import api from '../../api/modules/order'
import router from '../../router'

const state = {
  ordered: false
}

const actions = {
  submitOrder ({ commit }, data) {
    let food = 0
    data.order.map((item, index) => {
      food = item.id
      api.submitOrder(food, data.date, data.details).then((Response) => {
        window.localStorage.removeItem('orders')
        commit('SET_FOODS', true)
        router.push('/')
      }).catch((err) => {
        console.log(err)
      })
    })
  }
}

const mutations = {
  // Nothing yet
  SET_ORDER (state, ordered) {
    state.ordered = ordered
  }
}

const getters = {
  // ?
  getOrder: state => {
    return state.ordered
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
