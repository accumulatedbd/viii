import Vue from 'vue';
import App from '@/App.vue';

// 引入样式
import '@/styles/index.scss';
new Vue({
  render: (h) => h(App)
}).$mount('#app');
