import { cngAxios } from '../axios'
import { API_ROOT } from '../../config'

export default {
  submitOrder (food, date, details) {
    let orderData = new FormData()
    orderData.append('food', food)
    orderData.append('orderDateTime', date)
    orderData.append('details', details)
    return cngAxios.post(API_ROOT + '/orderCreation/', orderData,
      {headers: { 'Content-Type': 'application/x-www-form-urlencoded' }})
  }
}
