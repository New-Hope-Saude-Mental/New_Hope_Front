import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Button from 'primevue/button';

import "bootstrap/dist/css/bootstrap.min.css"

createApp(App)

.use(store)
.use(router)

.component('Button', Button)  















.mount('#app')
