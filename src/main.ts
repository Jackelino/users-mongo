import { createApp } from 'vue'
import PrimeVue from 'primevue/config';
import Button from "primevue/button"
import 'primevue/resources/themes/lara-light-green/theme.css'
import './style.css'
import {createPinia, Pinia} from 'pinia'
import App from './App.vue'

const pinia : Pinia = createPinia()
const app = createApp(App)
app.use(PrimeVue)
app.use(pinia)
app.component('Button', Button)
app.mount('#app')
