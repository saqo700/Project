<template>
  <div>
    <b-container>
      <b-row>
        <b-col cols="8">
          <input type="text" v-model="form.name">
          <input type="text" v-model="form.email">
          <input type="text" v-model="form.password">
          <b-button @click="sendToBack" class="btn btn-success">Log In</b-button>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        password: '',
      }
    }
  },
  methods: {
    sendToBack() {
      return new Promise((resolve, reject) => {
        console.log('asdasdsa')
        axios.post('/register', this.form)
          .then((result) => {
            console.log(result)
          })
          .catch(error => {
            console.log(error)
          })
      })
    }
  }
}
</script>

<style scoped>

</style>
