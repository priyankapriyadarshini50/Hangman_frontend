import { createApp } from 'vue';
import App from './App.vue'

import router from '@/router/router';
import store from '@/store/store';

import '@/config/axios'

const app = createApp(App)
app.use(store)
app.use(router)
app.mount('#app')
