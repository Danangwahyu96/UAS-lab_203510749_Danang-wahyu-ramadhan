import Vue from 'vue';
import App from './App.vue';
import router from './router';
import { Quasar } from 'quasar';
import 'quasar/dist/quasar.css';

Vue.use(Quasar);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
