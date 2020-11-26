// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.



import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'vuetify/dist/vuetify.min.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css'


import Vue from 'vue';
import Vuetify from 'vuetify';
import VueSwal from 'vue-swal';
import App from './App';
import router from './router/index.js';
Vue.use(BootstrapVue);
Vue.use(Vuetify);
Vue.use(VueSwal);
Vue.config.productionTip = false;
/* eslint-disable no-new */





new Vue({
  el: '#app',
  vuetify : new Vuetify(),
  router,
  components: { App },
  template: '<App/>',
});
