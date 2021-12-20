<template>
  <div>
    Profile page
    <div v-if="user">
      {{user}}
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      user : {}
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    getData(){
      this.$store.dispatch('GET_USER')
        .then(res=> {
          if(res){
            this.user = this.$store.getters.getUserData;
          }
        }).catch(error => {
        console.log(error)
      })

    }
  }

}
</script>

<style scoped>

</style>
