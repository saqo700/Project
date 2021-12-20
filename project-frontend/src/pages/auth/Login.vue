<template>
  <div>
    <b-container>
      <b-row>
        <b-col cols="8">
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
        email: '',
        password: ''
      },
    }
  },
  methods: {
    sendToBack() {
      this.$store.dispatch('LOGIN_USER', this.form)
        .then((result) => {
          this.$store.dispatch('ME_USER')
        })
    }
  }
}
</script>

<style scoped>
</style>
