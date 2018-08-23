import { cngAxios } from '../axios'
import { API_ROOT, ORDERLIST_ORDERING } from '../../config'

export default {
  getOrderList () {
    return cngAxios.get(API_ROOT + '/orderList?ordering=' + ORDERLIST_ORDERING)
  }
}
