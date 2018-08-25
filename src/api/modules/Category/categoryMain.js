import { cngAxios } from '../../axios'
import { API_CATEGORIESLIST, CATEGORIESLIST_ORDERING } from '../../../config'

export default {
  getCategoriesList (orderBy) {
    if (orderBy) {
      return cngAxios.get(API_CATEGORIESLIST + orderBy)
    } else {
      return cngAxios.get(API_CATEGORIESLIST + '?ordering=' + CATEGORIESLIST_ORDERING)
    }
  }
}
