import { cngAxios } from '../axios'
import { API_ROOT } from '../../config'

export default {
  addFood (name, picture, price, details) {
    var data = new FormData()
    data.append('name', name)
    data.append('picture', picture)
    data.append('price', price)
    data.append('detials', details)
    return cngAxios.post(API_ROOT + '/foodCreation/', data, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  }
}
