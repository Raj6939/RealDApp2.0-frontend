import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import router from './router'
import config from "./config";
// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css';
// import VueLoading from 'vue-loading-overlay';
// import 'vue-loading-overlay/dist/vue-loading.css';

// Vue.use(VueLoading);
Vue.use(VueSweetalert2);
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.config.productionTip = false
Vue.prototype.$config = config;
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
