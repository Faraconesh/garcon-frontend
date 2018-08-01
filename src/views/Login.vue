<template>
      <v-layout wrap justify-center>
        <v-flex xs4 order-xs5>
          <v-card color="white">
            <v-card-text>
            <v-form v-model="valid" lazy-validation>
              <v-container fluid>
                <v-layout wrap column>
            <v-flex>
              <v-text-field
                name='username'
                label='Username'
                v-model="auth.username"
                :rules="nameRules"
                required
              ></v-text-field>
            </v-flex>
            <v-flex >
              <v-text-field
                v-model="auth.password"
                :append-icon="showPassword ? 'visibility_off' : 'visibility'"
                :rules="[rules.required]"
                :type="showPassword ? 'text' : 'password'"
                name='password'
                label='Password'
                @click:append="showPassword = !showPassword">
              </v-text-field>
            </v-flex>
            <v-flex >
                <v-btn class="white--text" color="blue" large @click="loginMethod">Login
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
