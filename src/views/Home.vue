<template>
<div>
  <v-layout v-if="hasOrderList" transition="slide-y-transition" wrap justify-center>
      <v-flex xs6 ma-3>
        <v-card color="white">
          <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">Order list</h3>
          </div>
          </v-card-title>
          <v-card-text>
            <ul>
              <transition-group name="list" enter-active-class="animated bounceInUp" leave-active-class="animated bounceOutDown">
                <li v-for="(food, index) in orders" :key="index" transition="slide-y-reverse-transition">
                  {{food.name}}
                  <strong>{{food.price}}</strong>
                  <i @click="removeFood(index)"><v-icon>remove_shopping_cart</v-icon></i>
                  </li>
              </transition-group>
              </ul>
          </v-card-text>
          <v-card-actions>
            <v-btn @click="submitOrder" dark color="blue">Submit order
              <v-icon dark right>restaurant_menu</v-icon>
            </v-btn>
            <v-btn @click="clearOrder" dark color="red">Clear order
              <v-icon dark right>cancel</v-icon>
            </v-btn>
        </v-card-actions>
        </v-card>
      </v-flex>
  </v-layout>

  <v-layout wrap justify-center>
      <v-flex v-for="(food, index) in foods" :key="index" xs3 ma-1>
        <v-card color="white">
          <v-card-media :src="food.picture" height="300px"></v-card-media>
          <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{food.name}}</h3>
          </div>
          </v-card-title>
          <v-card-actions>
            <v-btn @click="addToOrderListMethod(food.id)" color="green">Add to order
              <v-icon dark right>add_shopping_cart</v-icon>
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn icon @click="show = !show">
              <v-icon>{{ show ? 'keyboard_arrow_up' : 'keyboard_arrow_down' }}</v-icon>
            </v-btn>
          </v-card-actions>
          <v-slide-y-transition>
            <v-card-text v-show="show">
              {{food.price}}
              {{food.details}}
            </v-card-text>
          </v-slide-y-transition>
        </v-card>
      </v-flex>
  </v-layout>
  </div>
</template>

<script>
import router from '../router'
export default {
  name: 'home',
  data () {
    return {
      hasOrderList: false,
      orders: [],
      show: false
    }
  },
  computed: {
    foods () {
      return this.$store.getters.getFoods
    }
  },
  beforeMount: function () {
    this.$store.dispatch('getFoodList')
    if (JSON.parse(window.localStorage.getItem('orders')) && JSON.parse(window.localStorage.getItem('orders')).length > 0) {
      this.orders = JSON.parse(window.localStorage.getItem('orders'))
      this.hasOrderList = true
    }
  },
  methods: {
    addToOrderListMethod (index) {
      this.hasOrderList = true
      let food = this.$store.getters.getFoods[index]
      this.orders.push(food)
      window.localStorage.setItem('orders', JSON.stringify(this.orders))
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
