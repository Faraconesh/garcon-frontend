<template>
<div>
  <v-container fluid>
    <v-layout wrap justify-center>
      <v-flex xs6 mt-5>
        <div>
          <v-card>
            <!-- <v-card-media :src="GoToHome" height="500px">
            </v-card-media> -->
            <v-card-text class="justify-center">
            {{ $t("passwordchanged.Content") }}
            </v-card-text>
            <v-card-actions class="justify-center">
              <v-btn to="/" color="cyan">
                {{ $t("passwordchanged.GoToHome") }}
              </v-btn>
            </v-card-actions>
          </v-card>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</div>
</template>

<script>
export default {
  name: 'PasswordChanged',
  // data: () => ({
  //   GoToHome: require('../../assets/images/GoToHome.jpeg')
  // })
}
</script>
