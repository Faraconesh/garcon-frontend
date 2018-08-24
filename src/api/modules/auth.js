import axios from 'axios'
import { API_LOGIN, API_CHANGEPASSWORD } from '../../config'

export default {
  login (username, password) {
    return axios.post(API_LOGIN, {
      username: username,
      password: password
    })
  },
  changepassword (email) {
    return axios.post(API_CHANGEPASSWORD, {
      email: email
    })
  }
}
