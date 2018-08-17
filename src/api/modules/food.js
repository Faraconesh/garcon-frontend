import { cngAxios } from '../axios'
import { API_ROOT } from '../../config'

export default {
  getFoodList () {
    return cngAxios.get(API_ROOT + '/foodList/')
  }
}
