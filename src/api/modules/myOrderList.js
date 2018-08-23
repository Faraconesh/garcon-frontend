import { cngAxios } from '../axios'
import { API_ROOT, MYORDERLIST_ORDERING } from '../../config'

export default {
  getMyOrderList () {
    return cngAxios.get(API_ROOT + '/myOrderList?ordering=' + MYORDERLIST_ORDERING)
  },
  removeMyOrderList (id) {
    return cngAxios.delete(API_ROOT + `/myOrderDetails/${id}`)
  }
}
