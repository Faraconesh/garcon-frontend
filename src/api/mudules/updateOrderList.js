import axios from 'axios'
import { API_ROOT } from '../../config'

export default {
  getOrderList (id) {
    return axios.put(API_ROOT + `/orderDetails/${id}/`, {
        status: true
    })
  }
}
