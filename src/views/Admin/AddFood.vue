<template>
  <v-container>
    <v-layout wrap justify-center ma-5>
      <v-flex xs8>
        <v-card color="white">
          <v-card-text>
            <h2>{{ $t("addfood.Title") }}</h2>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout wrap justify-center mt-5>
      <v-flex xs6 order-xs5>
        <v-card color="white">
          <v-card-text>
            <v-form lazy-validation>
              <v-container fluid>
                <v-layout wrap column>
                  <v-flex>
                    <v-text-field
                      name='name'
                      :label='$t("addfood.FoodName")'
                      v-model="food.name"
                      required
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12 class="text-xs-center text-sm-center text-md-center text-lg-center">
                    <img :src="imageUrl" height="150" v-if="imageUrl"/>
                    <v-text-field
                      :label='$t("addfood.Image")'
                      @click='pickFile'
                      v-model='imageName'
                      prepend-icon='attach_file'>
                    </v-text-field>
                    <input
                    type="file"
                      style="display: none"
                      ref="image"
                      accept="image/*"
                      @change="onFilePicked">
                  </v-flex>
                  <v-flex >
                    <v-text-field
                      :rules="[rules.required]"
                      v-model="food.price"
                      name='price'
                    :label='$t("addfood.Price")'>
                    </v-text-field>
                  </v-flex>
                  <v-flex >
                    <v-textarea
                      v-model="food.details"
                      name='details'
                    :label='$t("addfood.Details")'>
                    </v-textarea>
                  </v-flex>
                  <v-flex >
                    <v-btn class="white--text" color="blue" large @click="addFoodMethod">{{ $t("addfood.Submit") }}
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
  name: 'AddFood',
  data: () => ({
    food: { name: undefined, price: undefined, picture: undefined, details: undefined },
    imageName: '',
    imageUrl: '',
    rules: {
      required: value => !!value || 'Required.'
    },
    dialog: false
  }),
  methods: {
    addFoodMethod () {
      this.$store.dispatch('addFood', this.food)
    },
    pickFile () {
      this.$refs.image.click()
    },
    onFilePicked (e) {
      const files = e.target.files
      if (files[0] !== undefined) {
        this.imageName = files[0].name
        if (this.imageName.lastIndexOf('.') <= 0) {
          return
        }
        const fr = new FileReader()
        fr.readAsDataURL(files[0])
        fr.addEventListener('load', () => {
          this.imageUrl = fr.result
          this.food.picture = files[0] // this is an image file that can be sent to server...
        })
      } else {
        this.imageName = ''
        this.food.picture = ''
        this.imageUrl = ''
      }
    }
  }
}
</script>
