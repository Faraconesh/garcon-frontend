<template>
<div>
  <v-layout wrap justify-center>
      <v-flex v-for="(restaurant, index) in restaurants" :key="index" xs3 ma-1>
        <v-card color="white">
          <v-card-media :src="restaurant.picture" height="300px"></v-card-media>
          <v-card-title primary-title class="headline mb-0 justify-center">
            <v-layout column>
            <v-flex>
              <h5>{{restaurant.name}}</h5>
            </v-flex>
            <v-flex>
              <span>{{ $t('restaurantMain.NumberOfOrder') }} {{ $n(restaurant.userWeight)}}</span>
            </v-flex>
            </v-layout>
          </v-card-title>
          <v-card-actions class="justify-center">
            <v-btn @click="showMenuMethod(index)" color="green">{{ $t('restaurantMain.ShowMenu') }}
              <v-icon dark right>menu</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
  </v-layout>
  </div>
</template>

<script>
export default {
  name: 'RestaurantList',
  data () {
    return {
      restaurant: []
    }
  },
  computed: {
    restaurants () {
      return this.$store.getters.getRestaurants
    }
  },
  beforeMount: function () {
    this.$store.dispatch('getRestaurantsList')
  },
  methods: {
    showMenuMethod (id) {
    }
  }
}
</script>

<style scoped>
strong {
  float:left;
}
span#hashtag {
  font-size: 17px;
  color: blue;
}
</style>
