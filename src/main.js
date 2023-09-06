import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/globalstyle.css'
import { createPinia } from 'pinia'

createApp(App).mount('#app')
App.use(createPinia());


