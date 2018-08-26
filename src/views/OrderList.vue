<template>
<div>
  <v-layout wrap justify-center>
      <v-flex xs12 ma-3>
        <v-card color="white" >
          <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{ $t("orderlist.OrderList") }}</h3>
          </div>
          </v-card-title>
          <v-card-text>
          <ul>
            <li>
            <v-layout>
            <i><v-icon>done</v-icon></i>
            <v-flex xs2>{{ $t("orderlist.Username") }}</v-flex>
            <v-flex xs2>{{ $t("orderlist.FoodName") }}</v-flex>
            <v-flex xs2>{{ $t("orderlist.RestaurantName") }}</v-flex>
            <v-flex xs3>{{ $t("orderlist.Details") }}</v-flex>
            <v-flex xs2>{{ $t("orderlist.OrderDateTime") }}</v-flex>
            <v-flex xs1>{{ $t("orderlist.Price") }}</v-flex>
            </v-layout>
            </li>
            </ul>
            <ul>
              <transition-group name="list" enter-active-class="animated bounceInUp" leave-active-class="animated bounceOutDown">
                <li v-for="(order, index) in orders" :key="index" v-bind:class="{ alert: order.status }" transition="slide-y-reverse-transition">
                  <v-layout>
                  <i v-if="!order.status" @click="deliverOrder(order.id, true)"><v-icon>done</v-icon></i>
                  <i v-if="order.status" @click="deliverOrder(order.id, false)"><v-icon>offline_pin</v-icon></i>
                  <v-flex xs2>{{order.user}}</v-flex>
                  <v-flex xs2>{{order.food[0].name}}</v-flex>
                  <v-flex xs2>{{order.food[0].restaurant}}</v-flex>
                  <v-flex xs3><span style="white-space: pre;">{{order.details}}</span></v-flex>
                  <v-flex xs2>{{ $d(new Date(order.orderDateTime), 'short', 'fa-IR') }}</v-flex>
                  <v-flex xs1>{{ $n(order.food[0].price) }} {{$t('orderlist.Currency')}} </v-flex>

                  </v-layout>
                </li>
              </transition-group>
              </ul>
          </v-card-text>
        </v-card>
      </v-flex>
  </v-layout>
  </div>
</template>

<script>
export default {
  name: 'orderList',
  data () {
    return {
      orderList: []
    }
  },
  computed: {
    orders () {
      return this.$store.getters.getOrders
    }
  },
  beforeMount: function () {
    this.$store.dispatch('getOrderList')
  },
  methods: {
    deliverOrder (id, status) {
      this.$store.dispatch('deliverOrder', {id, status})
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
  .alert {
    background-color: #39c402;
  }
  #foodname {
    align-content: center;
    float: right;
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
