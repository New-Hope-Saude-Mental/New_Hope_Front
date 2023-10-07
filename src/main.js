import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import PrimeVue from 'primevue/config';
            
import Button from 'primevue/button';

import "bootstrap/dist/css/bootstrap.min.css"

createApp(App)

.use(store)
.use(router)
.use(PrimeVue, { /* options */ })

.component('Button', Button)  















.mount('#app')
