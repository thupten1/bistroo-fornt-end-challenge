import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue'; // Pas het pad aan op basis van jouw bestandsstructuur.
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia(); // Maak een Pinia-instantie aan.
const app = createApp(App);

app.use(pinia); // Voeg Pinia toe aan je Vue-app.
pinia.use(piniaPluginPersistedstate)

app.mount('#app');

