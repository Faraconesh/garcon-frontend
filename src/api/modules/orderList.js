import { cngAxios } from '../axios'
import { API_ROOT } from '../../config'

export default {
  getOrderList () {
    return cngAxios.get(API_ROOT + '/orderList')
  }
}
