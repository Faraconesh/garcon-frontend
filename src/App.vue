<template>
  <div id="app">
    <v-app>
      <v-content>
        <v-container fluid >
          <v-flex>
            <v-toolbar>
              <v-toolbar-side-icon></v-toolbar-side-icon>
              <v-toolbar-title>Title</v-toolbar-title>
              <v-spacer></v-spacer>
              <div class="hidden-sm-and-down">
                <router-link to="/"><v-btn>Home</v-btn></router-link>
                <router-link to="/login"><v-btn>Login</v-btn></router-link>
              </div>
            </v-toolbar>
          </v-flex>
        </v-container>
      </v-content>
      <router-view/>
    </v-app>
  </div>
</template>

<script>
export default {}
</script>

<style>
html,
body {
  height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow: auto;
  width: 100%;
  height: 100%;
  background-image: url('./assets/bg-01.jpg');
  background-repeat: repeat;
  background-size: cover;
  background-position: center;
}
</style>
