import Vue from 'vue';
import App from './App.vue';

export const store = new Vue({});

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount('#app');
