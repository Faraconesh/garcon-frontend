import axios from 'axios'
import { cngAxios } from '../axios'
import { API_LOGIN, API_CHANGEPASSWORD } from '../../config'

export default {
  login (username, password) {
    return axios.post(API_LOGIN, {
      username: username,
      password: password
    })
  },
  changepassword (newpassword1, newpassword2) {
    return cngAxios.post(API_CHANGEPASSWORD, {
      new_password1: newpassword1,
      new_password2: newpassword2
    })
  }
}
