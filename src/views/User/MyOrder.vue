<template>
<div>
  <v-layout wrap justify-center>
      <v-flex xs12 ma-3>
        <v-card color="white" >
          <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{ $t("myorderlist.OrderList") }}</h3>
          </div>
          </v-card-title>
          <v-card-text>
          <ul>
            <li>
            <v-layout>
            <v-flex xs2>{{ $t("myorderlist.Price") }}</v-flex>
            <v-flex xs2>{{ $t("myorderlist.OrderDateTime") }}</v-flex>
            <v-flex xs3>{{ $t("myorderlist.Details") }}</v-flex>
            <v-flex xs2>{{ $t("myorderlist.RestaurantName") }}</v-flex>
            <v-flex xs3>{{ $t("myorderlist.FoodName") }}</v-flex>
            </v-layout>
            </li>
            </ul>
            <ul>
              <transition-group name="list" enter-active-class="animated bounceInUp" leave-active-class="animated bounceOutDown">
                <li v-for="(order, index) in orders" :key="index" v-bind:class="{ alert: order.status }" transition="slide-y-reverse-transition">
                  <v-layout>
                  <v-flex xs2>{{ $n(order.food[0].price) }} {{$t('orderlist.Currency')}} </v-flex>
                  <v-flex xs2>{{ $d(new Date(order.orderDateTime), 'short', 'fa-IR') }}</v-flex>
                  <v-flex xs3><span style="white-space: pre;">{{order.details}}</span></v-flex>
                  <v-flex xs2>{{order.food[0].restaurant}}</v-flex>
                  <v-flex xs3>{{order.food[0].name}}</v-flex>
                  <i v-if="!order.status" @click="removeOrder(order.id)"><v-icon>cancel</v-icon></i>
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
  name: 'MyOrderList',
  data () {
    return {
      orderList: []
    }
  },
  computed: {
    orders () {
      return this.$store.getters.getMyOrderList
    }
  },
  beforeMount: function () {
    this.$store.dispatch('getMyOrderList')
  },
  methods: {
    removeOrder (id) {
      this.$store.dispatch('removeMyOrderList', id)
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
