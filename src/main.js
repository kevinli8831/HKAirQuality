import Vue from 'vue'
import App from './App.vue'
import * as VueGoogleMaps from 'vue2-google-maps'
import './index.css'
import vuetify from './plugins/vuetify'
import router from './router'


Vue.config.productionTip = false

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBitdzdQ1Y5aAuy04WDQLt8ZF6NfUvV2gU',
    libraries: 'places',
  }
});
new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
