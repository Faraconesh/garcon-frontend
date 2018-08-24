<template>
  <v-container>
    <v-layout wrap justify-center ma-5>
      <v-flex xs8>
        <v-card color="white">
          <v-card-text>
            <h2>{{ $t("login.Welcome") }}</h2>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>

    <v-layout wrap justify-center mt-5>
      <v-flex xs6 order-xs5>
        <v-card color="white">
          <v-card-text>
            <v-form v-model="valid" lazy-validation  @keyup.enter.native="loginMethod">
              <v-container fluid>
                <v-layout wrap column>
                  <v-flex>
                  <v-text-field
                    class="left-input-direction"
                    name='username'
                    :label='$t("login.Username")'
                    v-model="auth.username"
                    :rules="nameRules"
                    required
                  ></v-text-field>
                  </v-flex>
                  <v-flex >
                    <v-text-field
                      class="left-input-direction"
                      name='password'
                      :label='$t("login.Password")'
                      v-model="auth.password"
                      :rules="[rules.required]"
                      :append-icon="showPassword ? 'visibility_off' : 'visibility'"
                      :type="showPassword ? 'text' : 'password'"
                      @click:append="showPassword = !showPassword">
                    </v-text-field>
                  </v-flex>
                  <v-flex >
                    <v-btn class="white--text" color="blue" large @click="loginMethod">{{ $t("login.Login") }}
                      <v-icon dark right>send</v-icon>
                    </v-btn>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-form>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'login',
  data: () => ({
    auth: { username: undefined, password: undefined },
    valid: false,
    name: '',
    nameRules: [
      v => !!v || 'Name is required'
    ],
    showPassword: false,
    password: '',
    rules: {
      required: value => !!value || 'Required.'
    }
  }),
  methods: {
    loginMethod () {
      this.$store.dispatch('login', this.auth)
    }
  }
}
</script>
<style scoped>
.left-input-direction {
  direction: ltr;
}
</style>
