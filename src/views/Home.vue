<template>
  <v-layout wrap justify-center>
      <v-flex v-for="food in foods" :key="food.id" xs3 ma-1>
        <v-card color="white">
          <v-card-media :src="food.picture" height="300px"></v-card-media>
          <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{food.name}}</h3>
          </div>
          </v-card-title>
          <v-card-text>
            {{food.price}}
            {{food.details}}
          </v-card-text>
        </v-card>
      </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'home',
  computed: {
    foods () {
      return this.$store.getters.getFoods
    }
  },
  beforeMount: function () {
    this.$store.dispatch('getFoodList')
  }
}
</script>
