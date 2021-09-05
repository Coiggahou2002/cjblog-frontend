import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from 'vuex'
import vuetify from './plugins/vuetify'

Vue.use(Vuex)

Vue.config.productionTip = false

import mavonEditor from 'mavon-editor';
import "mavon-editor/dist/css/index.css";
Vue.use(mavonEditor);

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
