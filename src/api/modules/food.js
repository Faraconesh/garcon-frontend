import { cngAxios } from '../axios'
import { API_FOODLIST } from '../../config'

export default {
  getFoodList (orderBy) {
    if (orderBy) {
      return cngAxios.get(API_FOODLIST + orderBy)
    } else {
      return cngAxios.get(API_FOODLIST + '?ordering=-userWeight,customWeight')
    }
  }
}
