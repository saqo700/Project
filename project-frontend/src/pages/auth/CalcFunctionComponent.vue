<template>
  <b-container>
    <b-row>
      <b-col cols="6">
        <ValidationObserver ref="tokos_observer">
          <b-form @submit.stop.prevent="calc">
            <ValidationProvider
              name="argOne"
              rules="required|numeric"
            >
              <b-form-group
                label-class="form-label"
                label-for="argOne"
                slot-scope="{ errors }"
                :invalid-feedback="errors[0]"
              >
                <b-form-input
                  id="email"
                  placeholder="Argument 1"
                  v-model="tokos.argOne"
                  :state="errors[0] ? false : null"
                  trim
                />
              </b-form-group>
            </ValidationProvider>
            <ValidationProvider
              name="argTwo"
              rules="required|numeric"
            >
              <b-form-group
                label-class="form-label"
                class="mt-27 mb-10 position-relative"
                label-for="argTwo"
                slot-scope="{ errors }"
                :invalid-feedback="errors[0]"
              >
                <b-form-input
                  id="password"
                  name="password"
                  placeholder="Argument 2"
                  v-model="tokos.argTwo"
                  :state="errors[0] ? false : null"
                  trim
                />
              </b-form-group>
            </ValidationProvider>
            <!--     Login button  -->
            <div class="d-grid gap-2 mt-33 mb-35">
              <b-button
                variant="primary"
                block
                type="submit"
              >
                Войти
              </b-button>
            </div>
          </b-form>
        </ValidationObserver>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import {ValidationProvider, ValidationObserver} from "vee-validate"

export default {
  components: {
    ValidationProvider,
    ValidationObserver,
  },

  data() {
    return {
      tokos: {
        argOne: '',
        argTwo: ''
      },
      result: ''
    }
  },

  methods: {
    calc() {
      this.result = (Number(this.tokos.argOne) * Number(this.tokos.argTwo)) / 100
      this.$emit('messege', this.result)
    },

  }
}
</script>
