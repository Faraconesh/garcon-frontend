import api from '../../api/mudules/food'

const actions = {
  // This action will get an auth array which contains username and password
  getList ({ commit }, auth) {
    api.getList().then((Response) => {
        console.log(Response)
    }).catch((err) => {
      console.log(err)
    })
  }
}

const mutations = {
  // Nothing yet
}

const getters = {
  // ?
}

export default {
  actions,
  mutations,
  getters
}
