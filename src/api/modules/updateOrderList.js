import { cngAxios } from '../axios'
import { API_ROOT } from '../../config'

export default {
  deliverOrder (id) {
    return cngAxios.put(API_ROOT + `/orderDetails/${id}`, {
      status: true
    })
  }
}
