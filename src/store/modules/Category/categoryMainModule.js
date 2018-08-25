import api from '../../../api/modules/Category/categoryMain'

const state = {
  categories: []
}

const actions = {
  getCategoriesList ({ commit }, orderBy) {
    api.getCategoriesList(orderBy).then((Response) => {
      commit('SET_CATEGORIES', Response.data)
    }).catch((err) => {
      console.log(err)
    })
  }
}

const mutations = {
  SET_CATEGORIES (state, categories) {
    state.categories = categories
  }
}

const getters = {
  getCategories: state => {
    return state.categories
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
