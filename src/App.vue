<template>
  <div id="app">
    <v-app>
      <v-content>
        <v-container fluid>
          <v-flex>
            <v-toolbar>
                <v-menu bottom left offset-y>
                  <v-btn
                    slot="activator"
                    icon
                  >
                    <v-icon>more_vert</v-icon>
                  </v-btn>
                  <v-list>
                    <v-list-tile to='/changepassword'>
                      <v-list-tile-title>{{ $t("toolBar.ChangePassword") }}</v-list-tile-title>
                    </v-list-tile>
                  </v-list>
                </v-menu>
              <v-toolbar-title class="mr-2">{{username}} {{ $t("toolBar.Title") }} {{ $t("toolBar.IsInYourService") }}</v-toolbar-title>
              <v-spacer></v-spacer>
              <div class="hidden-sm-and-down">
                <router-link to="/"><v-btn>{{ $t("toolBar.Home") }}</v-btn></router-link>
                <router-link v-if="isAuthenticated" to="/restaurant"><v-btn>{{ $t("toolBar.Restaurant") }}</v-btn></router-link>
                <router-link v-if="isAuthenticated" to="/category"><v-btn>{{ $t("toolBar.Category") }}</v-btn></router-link>
                <router-link v-if="isAuthenticated" to="/orderList"><v-btn>{{ $t("toolBar.OrderList") }}</v-btn></router-link>
                <router-link v-if="isAuthenticated" to="/myorder"><v-btn>{{ $t("toolBar.MyOrderList") }}</v-btn></router-link>
                <router-link v-if="!isAuthenticated" to="/login"><v-btn>{{ $t("toolBar.Login") }}</v-btn></router-link>
                <router-link v-else to="/logout"><v-btn>{{ $t("toolBar.Logout") }}</v-btn></router-link>
              </div>
            </v-toolbar>
          </v-flex>
          <v-flex>
            <router-view/>
          </v-flex>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>

<script>
export default {
  data: () => ({
    isAuthenticated: window.localStorage.getItem('user_token')
  }),
  computed: {
    username () {
      return window.localStorage.getItem('user_name')
    }
  }
}
</script>

<style>
@font-face {
    font-family: 'Vazir';
    src: url("./assets/fonts/Vazir.woff") format('woff');
}
html,
body {
  height: 100%;
}
* {
  font-family: 'Vazir', Helvetica, Arial, sans-serif;;
}
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow: auto;
  background-image: url('./assets/images/bg-01.jpg');
  background-repeat: repeat;
  background-size: cover;
  background-position: center;
}
</style>
