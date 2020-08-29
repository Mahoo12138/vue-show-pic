import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import Bmob from "hydrogen-js-sdk";

Vue.config.productionTip = false

Bmob.initialize("49ed7f342ecc32aa","147369");
// Bmob.debug(true)


Vue.prototype.Bmob = Bmob

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
