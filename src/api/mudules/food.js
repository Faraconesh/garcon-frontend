import axios from 'axios'
import { API_ROOT } from '../../config'

export default {
  getList () {
    return axios.get(API_ROOT + '/foodList/', )
  }
}
