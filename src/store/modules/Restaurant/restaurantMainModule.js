import api from '../../../api/modules/Restaurant/restaurantMain'

const state = {
  restaurants: []
}

const actions = {
  // This action will get an auth array which contains username and password
  getRestaurantsList ({ commit }, orderBy) {
    api.getRestaurantsList(orderBy).then((Response) => {
      commit('SET_RESTAURANTS', Response.data)
    }).catch((err) => {
      console.log(err)
    })
  }
}

const mutations = {
  // Nothing yet
  SET_RESTAURANTS (state, restaurants) {
    state.restaurants = restaurants
  }
}

const getters = {
  // ?
  getRestaurants: state => {
    return state.restaurants
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
