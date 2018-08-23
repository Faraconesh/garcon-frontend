import { cngAxios } from '../axios'
import { API_FOODLIST, FOODLIST_ORDERING } from '../../config'

export default {
  getFoodList (orderBy) {
    if (orderBy) {
      return cngAxios.get(API_FOODLIST + orderBy)
    } else {
      return cngAxios.get(API_FOODLIST + '?ordering=' + FOODLIST_ORDERING)
    }
  }
}
