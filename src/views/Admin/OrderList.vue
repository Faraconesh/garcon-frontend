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
            <v-flex xs3>{{ $t("orderlist.OrderDateTime") }}</v-flex>
            <v-flex xs3>{{ $t("orderlist.Details") }}</v-flex>
            <v-flex xs3>{{ $t("orderlist.FoodName") }}</v-flex>
            <v-flex xs3>{{ $t("orderlist.Username") }}</v-flex>
            </v-layout>
            </li>
            </ul>
            <ul>
              <transition-group name="list" enter-active-class="animated bounceInUp" leave-active-class="animated bounceOutDown">
                <li v-for="(order, index) in orders" :key="index" v-bind:class="{ alert: order.status }" transition="slide-y-reverse-transition">
                  <v-layout>
                  <v-flex xs3>{{order.orderDateTime}}</v-flex>
                  <v-flex xs3><span style="white-space: pre;">{{order.details}}</span></v-flex>
                  <v-flex xs3>{{order.food[0]}}</v-flex>
                  <v-flex xs3>{{order.user}}</v-flex>
                  <i v-if="!order.status" @click="deliverOrder(order.id)"><v-icon>done</v-icon></i>
                  <i v-if="order.status"><v-icon>offline_pin</v-icon></i>
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
    deliverOrder (id) {
      this.$store.dispatch('deliverOrder', id)
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
