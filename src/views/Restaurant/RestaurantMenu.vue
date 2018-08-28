<template>
<div>
  <v-layout v-if="hasOrderList" wrap justify-center>
    <v-snackbar
    v-model="snackbar"
    color="success"
    timeout=3000
    top
    >
      {{ $t("home.AddSuccessfully") }}
    </v-snackbar>
      <v-flex xs6 ma-3>
        <v-card color="white">
          <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{ $t("home.OrderList") }}</h3>
          </div>
          </v-card-title>
          <v-card-text>
            <ul>
              <transition-group name="list" enter-active-class="animated bounceInUp" leave-active-class="animated bounceOutDown">
                <li v-for="(food, index) in orders" :key="index" transition="slide-y-reverse-transition">
                  <v-layout>
                    <v-flex>
                    <i @click="removeFood(index)"><v-icon>remove_shopping_cart</v-icon></i>
                    </v-flex>
                    <v-flex>
                      {{food.name}}
                    </v-flex>
                    <v-flex>
                      <strong>{{ $n(food.price) }} {{$t('orderlist.Currency')}}</strong>
                    </v-flex>
                  </v-layout>
                  </li>
              </transition-group>
              </ul>
          </v-card-text>
          <v-card-actions>
            <v-flex>
              <v-btn @click="submitOrder" dark color="blue">{{ $t("home.SubmitOrder") }}
                <v-icon dark right>restaurant_menu</v-icon>
              </v-btn>
            </v-flex>
            <v-flex>
              <v-btn @click="clearOrder" dark color="red">{{ $t("home.ClearOrder") }}
                <v-icon dark right>cancel</v-icon>
              </v-btn>
            </v-flex>
        </v-card-actions>
        </v-card>
      </v-flex>
  </v-layout>
  <v-layout wrap justify-center>
      <v-flex v-for="(food, index) in foods" :key="index" v-if="food.restaurant==restaurantName" xs3 ma-1>
        <v-card color="white">
          <v-card-media :src="food.picture" height="300px"></v-card-media>
          <v-card-title primary-title class="headline mb-0 justify-center">
            <v-layout column>
            <v-flex>
              <h5>{{food.name}}</h5>
            </v-flex>
            <v-flex>
              <h5>{{ $n(food.price) }} {{$t('home.Currency')}} </h5>
            </v-flex>
            <v-flex>
              <span id="hashtag" v-for="(category, index) in food.categories" :key="index">
                #{{category}}
                </span>
            </v-flex>
            </v-layout>
          </v-card-title>
          <v-card-text>
            <v-flex>
              <span>{{ $t('home.NumberOfOrder') }} {{ $n(food.userWeight)}}</span>
            </v-flex>
            <v-flex>
              <h3>{{food.restaurant}}</h3>
            </v-flex>
          </v-card-text>
          <v-card-actions>
            <v-layout>
              <v-flex xs6 md3>
            <v-btn @click="addToOrderListMethod(index+1)" color="green">{{ $t("home.AddToOrder") }}
              <v-icon dark right>add_shopping_cart</v-icon>
            </v-btn>
              </v-flex>
              <v-spacer></v-spacer>
              <v-flex xs6 md3>
            <v-btn v-if="food.details" icon @click="showHandle(index)">
              <v-icon>{{ shows[index] ? 'keyboard_arrow_up' : 'keyboard_arrow_down' }}</v-icon>
            </v-btn>
              </v-flex>
            </v-layout>
          </v-card-actions>
          <v-slide-y-transition>
            <v-card-text v-show="shows[index]">
              <v-layout column>
                <v-flex>
                  <span style="white-space: pre-wrap;">{{food.details}}</span>
                </v-flex>
              </v-layout>
            </v-card-text>
          </v-slide-y-transition>
        </v-card>
      </v-flex>
  </v-layout>
  </div>
</template>

<script>
import router from '../../router'
export default {
  name: 'RestaurantMenu',
  data () {
    return {
      snackbar: false,
      restaurantName: undefined,
      hasOrderList: false,
      orders: [],
      shows: []
    }
  },
  computed: {
    foods () {
      return this.$store.getters.getFoods
    }
  },
  beforeMount: function () {
    this.restaurantName = this.$router.currentRoute.query.restaurantName
    this.$store.dispatch('getFoodList')
    if (JSON.parse(window.localStorage.getItem('orders')) && JSON.parse(window.localStorage.getItem('orders')).length > 0) {
      this.orders = JSON.parse(window.localStorage.getItem('orders'))
      this.hasOrderList = true
    }
  },
  methods: {
    addToOrderListMethod (index) {
      this.hasOrderList = true
      let food = this.$store.getters.getFoods[index - 1]
      this.orders.push(food)
      window.localStorage.setItem('orders', JSON.stringify(this.orders))
      this.snackbar = true
    },
    clearOrder () {
      this.orders = []
      window.localStorage.removeItem('orders')
      this.hasOrderList = false
    },
    removeFood (index) {
      this.orders.splice(index, 1)
      window.localStorage.setItem('orders', JSON.stringify(this.orders))
      if (JSON.parse(window.localStorage.getItem('orders')) && JSON.parse(window.localStorage.getItem('orders')).length === 0) {
        this.hasOrderList = false
      }
    },
    submitOrder () {
      if (JSON.parse(window.localStorage.getItem('orders')) && JSON.parse(window.localStorage.getItem('orders')).length > 0) {
        router.push('/order')
      }
    },
    showHandle (index) {
      if (!this.shows[index]) {
        this.shows[index] = false
      }
      this.shows.splice(index, 1, !this.shows[index])
    }
  }
}
</script>

<style scoped>
  @import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";
  ul {
    list-style-type: none;
  }
  ul li {
    padding: 20px;
    font-size: 1.3em;
    background-color: #E0EDF4;
    border-left: 5px solid #3EB3F6;
    margin-bottom: 2px;
    color: #3E5252;
  }
  i {
  float:right;
  cursor:pointer;
  }
  strong {
  float:left;
  }
  span#hashtag {
    font-size: 17px;
    color: blue;
  }
  @keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
