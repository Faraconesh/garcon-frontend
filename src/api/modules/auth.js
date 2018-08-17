import { cngAxios } from '../axios'
import { API_ROOT } from '../../config'

export default {
  login (username, password) {
    return cngAxios.post(API_ROOT + '/accounts/login/', {
      username: username,
      password: password
    })
  }
}
