<template>
  <b-container>
    <b-row>
      <b-col cols="6">
        <p>{{result}}</p>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
 export default {
   props: [
     'result'
   ],
 }
</script>
