<template>
<div>
  <v-layout wrap justify-center>
      <v-flex v-for="(category, index) in categories" :key="index" xs5 ma-1>
        <v-card color="white">
          <v-card-media :src="category.picture" height="400px"></v-card-media>
          <v-card-title primary-title class="headline mb-0 justify-center">
            <v-flex>
              <h5 class="hashtag">#{{category.title}}</h5>
            </v-flex>
          </v-card-title>
          <v-card-actions class="justify-center">
            <v-btn @click="showMenuMethod(category.title)" color="green">{{ $t('categoryMain.ShowMenu') }}
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
  name: 'CategoryList',
  data () {
    return {
      category: []
    }
  },
  computed: {
    categories () {
      return this.$store.getters.getCategories
    }
  },
  beforeMount: function () {
    this.$store.dispatch('getCategoriesList')
  },
  methods: {
    showMenuMethod (categoryName) {
      this.$router.push({ path: 'categorymenu', query: {categoryName: categoryName} })
    }
  }
}
</script>

<style scoped>
.hashtag {
  font-size: 17px;
  color: blue;
}
</style>
