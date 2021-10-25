import { createApp, App as VueApp } from 'vue'
import App from './App.vue'
import BaseHeader from './components/BaseHeader.vue';
import BaseItemDetails from './components/BaseItemDetails.vue';

const app: VueApp = createApp(App)

app.component('base-header', BaseHeader);
app.component('base-item-details', BaseItemDetails);

app.mount('#app')
