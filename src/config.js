// API ADDRESS HERE
export const API_ROOT = 'http://127.0.0.1:8000/api'
export const API_LOGIN = API_ROOT + '/accounts/login/'
export const API_CHANGEPASSWORD = API_ROOT + '/accounts/password/reset/'
export const API_FOODLIST = API_ROOT + '/foodList'
export const API_RESTAURANTSLIST = API_ROOT + '/restaurantList'

// ADD V1 API ADDRESS
export const ORDERLIST_ORDERING = '-orderDateTime'
export const FOODLIST_ORDERING = '-userWeight,customWeight'
export const MYORDERLIST_ORDERING = '-orderDateTime,-submitDateTime,-id'
export const RESTAURANTSLIST_ORDERING = '-userWeight,customWeight'
