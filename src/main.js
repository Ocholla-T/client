import { createApp } from 'vue';
// @ts-ignore
import App from './App.vue';
import router from './router/index.js';

createApp(App).use(router).mount('#app');
