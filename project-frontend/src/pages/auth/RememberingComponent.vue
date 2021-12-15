<template>
  <b-container>
    <b-row>
      <b-col cols="6">
        <CalcFunction @messege="sendResultInParent"/>
      </b-col>
      <b-col cols="6">
        <ViewAnswer
          :result = result
        />
      </b-col>
    </b-row>
  </b-container>
</template>
<script>

import CalcFunction from './CalcFunctionComponent'
import ViewAnswer from './ViewAnswerComponent'

export default {

  data() {
    return {
      result: ''
    }
  },

  components: {
    CalcFunction,
    ViewAnswer
  },
  methods: {
    sendResultInParent(result) {
      return  this.result =  result
    }
  }


}
</script>
