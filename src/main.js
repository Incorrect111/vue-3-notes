import { createApp } from 'vue'
import App from './App.vue'
import './assets/scss/main.scss'
import router from './routes';
import { store } from './store'


const app = createApp(App);
app.use(router);
app.use(store);
app.mount('#app');
