import api from '../../api/modules/addfood'
import router from '../../router'

const state = {
  foodAdded: false
}

const actions = {
  addFood ({ commit }, food) {
    api.addFood(food.name, food.picture, food.price, food.details).then((Response) => {
      commit('SET_FOODADDED', true)
      router.push('/')
    }).catch((err) => {
      console.log(err.response)
    })
  }
}

const mutations = {
  // This mutation gets a token and set it to state
  SET_FOODADDED (state, foodAdded) {
    state.foodAdded = foodAdded
  }
}

const getters = {
  // Just return the token
  getFoodAdded: state => {
    return state.foodAdded
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
