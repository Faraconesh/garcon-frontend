import axios from 'axios'
import { API_ROOT } from '../../config'

export default {
  getOrderList () {
    return axios.get(API_ROOT + '/orderList/')
  }
}
