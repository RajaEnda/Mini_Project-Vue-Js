import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router/index'
import { createProvider } from './vue-apollo'
import compositionApi from "@vue/composition-api";

Vue.config.productionTip = false
Vue.use(compositionApi)

new Vue({
  vuetify,
  router,
  apolloProvider: createProvider(),
  render: h => h(App)
}).$mount('#app')
