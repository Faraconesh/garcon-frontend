import { cngAxios } from '../../axios'
import { API_RESTAURANTSLIST, RESTAURANTSLIST_ORDERING } from '../../../config'

export default {
  getRestaurantsList (orderBy) {
    if (orderBy) {
      return cngAxios.get(API_RESTAURANTSLIST + orderBy)
    } else {
      return cngAxios.get(API_RESTAURANTSLIST + '?ordering=' + RESTAURANTSLIST_ORDERING)
    }
  }
}
