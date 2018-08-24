<template>
  <v-container>
    <v-layout wrap justify-center ma-5>
      <v-flex xs8>
        <v-card color="white">
          <v-card-text>
            <h2>{{ $t("changepassword.Title") }}</h2>
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
                    name='email'
                    :label='$t("changepassword.Email")'
                    v-model="email"
                    required
                  ></v-text-field>
                  </v-flex>
                  <v-flex>
                  <v-btn class="white--text" color="blue" large @click="changePasswordMethod">{{ $t("changepassword.SentMail") }}
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
  name: 'ChangePassword',
  data: () => ({
    email: undefined,
    valid: false
  }),
  methods: {
    changePasswordMethod () {
      this.$store.dispatch('changepassword', this.email)
    }
  }
}
</script>
<style scoped>
.left-input-direction {
  direction: ltr;
}
</style>
