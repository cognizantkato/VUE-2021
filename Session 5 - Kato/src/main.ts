import { createApp, App as VueApp } from 'vue'
import App from './App.vue'
import BaseHeader from './components/BaseHeader.vue';

const app: VueApp = createApp(App)
app.component('base-header', BaseHeader);
app.mount('#app')
