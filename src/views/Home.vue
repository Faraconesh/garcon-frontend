<template>
  <v-layout wrap justify-center>
      <v-flex xs4 order-xs5>
        <v-card color="white">
          <v-card-text>
            test
          </v-card-text>
        </v-card>
      </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'home',
  data() {
    foods: this.$store.state.Module.stateName
  }
}
</script>
