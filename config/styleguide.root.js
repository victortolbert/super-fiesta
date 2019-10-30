import Vue from 'vue'
import Buefy from 'buefy'
import '../public/assets/css/tailwind.css'

Vue.use(Buefy, {
  defaultIconPack: 'fas',
})

export default previewComponent => {
  return {
    render (createElement) {
      return createElement(previewComponent)
    },
  }
}
