import Vue from 'vue';
import App from './App.vue';
import router from './router';

import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
Vue.config.productionTip = false;
Vue.use(Antd);

import VueClipboard from 'vue-clipboard2';

Vue.use(VueClipboard);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
