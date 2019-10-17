import Vue from 'vue'
import VueI18n from 'vue-i18n'
import VeeValidate from 'vee-validate'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(VueI18n)
Vue.use(VeeValidate)
Vue.use(Vuetify)

Vue.mixin({
  data() {
    return {
      colorDemo: 'blue',
      sizeDemo: 'large',
    }
  },
})
