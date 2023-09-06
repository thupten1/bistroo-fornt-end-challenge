import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/globalstyle.css'
import { createPinia } from 'pinia'

apply.use(createPinia());
createApp(App).mount('#app')


