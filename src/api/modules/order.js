import { cngAxios } from '../axios'
import { API_ROOT } from '../../config'

export default {
  submitOrder (food, orderDateTime, details) {
    var data = new FormData()
    data.append('food', food)
    data.append('details', details)
    if (orderDateTime) {
      data.append('orderDateTime', orderDateTime)
    }
    return cngAxios.post(API_ROOT + '/orderCreation', data, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  }
}
