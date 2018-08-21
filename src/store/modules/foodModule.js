import api from '../../api/modules/food'

const state = {
  foods: []
}

const actions = {
  // This action will get an auth array which contains username and password
  getFoodList ({ commit }, orderBy) {
    api.getFoodList(orderBy).then((Response) => {
      commit('SET_FOODS', Response.data)
    }).catch((err) => {
      console.log(err)
    })
  }
}

const mutations = {
  // Nothing yet
  SET_FOODS (state, foods) {
    state.foods = foods
  }
}

const getters = {
  // ?
  getFoods: state => {
    return state.foods
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
