import { cngAxios } from '../axios'
import { API_ROOT } from '../../config'

export default {
  submitOrder (food, submitDateTime, details) {
    var data = new FormData()
    data.append('food', food)
    data.append('details', details)
    data.append('submitDateTime', submitDateTime)
    return cngAxios.post(API_ROOT + '/orderCreation/', data, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  }
}
