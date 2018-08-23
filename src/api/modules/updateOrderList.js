import { cngAxios } from '../axios'
import { API_ROOT } from '../../config'

export default {
  deliverOrder (id, status) {
    return cngAxios.put(API_ROOT + `/orderDetails/${id}`, {
      status: status
    })
  },
  removeOrder (id) {
    return cngAxios.delete(API_ROOT + `/orderDetails/${id}`)
  }
}
