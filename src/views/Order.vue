<template>
<div>
  <v-layout v-if="hasOrderList" wrap justify-center>
    <v-flex xs6 ma-3>
      <v-card color="white">
        <v-card-title primary-title>
        <div>
          <h3 class="headline mb-0">{{ $t("order.OrderList") }}</h3>
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
                      <strong>{{ $n(food.price) }} {{$t('orderlist.Currency')}} </strong>
                    </v-flex>
                  </v-layout>
                </li>
            </transition-group>
            </ul>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
  <v-layout wrap justify-center fill-height>
    <v-flex xs6 order-xs5>
      <v-card color="white">
        <v-card-text>
          <v-form v-model="valid" lazy-validation>
            <v-container fluid>
              <v-layout wrap column>
          <v-flex>
            <v-textarea
              name='details'
              :label='$t("order.Details")'
              v-model="details"
            ></v-textarea>
          </v-flex>
          <v-flex xs12 sm6 md4>
            <v-menu
              ref="menu2"
              :close-on-content-click="false"
              v-model="menu2"
              :nudge-right="40"
              :return-value.sync="date"
              lazy
              transition="scale-transition"
              offset-y
              full-width
              min-width="290px"
            >
            <!-- Make date persian in v-model -->
              <v-text-field
                slot="activator"
                v-model="date"
                :label='$t("order.PickDate")'
                prepend-icon="event"
                readonly
              ></v-text-field>
              <v-date-picker v-model="date" locale="fa" @input="$refs.menu2.save(date)"></v-date-picker>
            </v-menu>
          </v-flex>
          <v-layout row>
            <v-flex >
                <v-btn class="white--text" color="blue" large @click="submitOrderMethod">{{ $t("order.SubmitOrder") }}
                  <v-icon dark right>done</v-icon>
                </v-btn>
            </v-flex>
            <v-flex >
                <v-btn class="white--text" color="red" large @click="cancelOrderMethod">{{ $t("order.CancelOrder") }}
                  <v-icon dark right>cancel</v-icon>
                </v-btn>
            </v-flex>
          </v-layout>
          </v-layout>
          </v-container>
          </v-form>
          </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</div>
</template>

<script>
import router from '../router'
export default {
  name: 'order',
  data: () => ({
    hasOrderList: false,
    orders: [],
    details: '',
    valid: false,
    date: null,
    menu2: false
  }),
  computed: {
    computedDateFormatted () {
      return this.formatDate(this.date)
    }
  },
  watch: {
    date (val) {
      this.dateFormatted = this.formatDate(this.date)
    }
  },
  beforeMount: function () {
    if (JSON.parse(window.localStorage.getItem('orders')) && JSON.parse(window.localStorage.getItem('orders')).length > 0) {
      this.orders = JSON.parse(window.localStorage.getItem('orders'))
      this.hasOrderList = true
    } else {
      router.push('/')
    }
  },
  methods: {
    submitOrderMethod () {
      if (this.hasOrderList) {
        if (this.date) {
          this.$store.dispatch('submitOrder', {order: this.orders, date: this.date, details: this.details})
        } else {
          this.$store.dispatch('submitOrder', {order: this.orders, date: new Date().toISOString().split('T')[0], details: this.details})
        }
      }
    },
    removeFood (index) {
      this.orders.splice(index, 1)
      window.localStorage.setItem('orders', JSON.stringify(this.orders))
      if (
        JSON.parse(window.localStorage.getItem('orders')) &&
        JSON.parse(window.localStorage.getItem('orders')).length === 0
      ) {
        this.hasOrderList = false
      }
      if (!JSON.parse(window.localStorage.getItem('orders')) || JSON.parse(window.localStorage.getItem('orders')).length === 0) {
        router.push('/')
      }
    },
    formatDate (date) {
      if (!date) return null
      const [year, month, day] = date.split('-')
      return `${month}/${day}/${year}`
    },
    cancelOrderMethod () {
      this.orders = []
      window.localStorage.removeItem('orders')
      this.hasOrderList = false
      router.push('/')
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
