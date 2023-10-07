import { createRouter, createWebHashHistory } from 'vue-router'
import HomeComponent from '../components/HomeComponent.vue'
import NavbarComponent from '../components/NavbarComponent.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeComponent
  },  
  {
    path: '/menu',
    name: 'Navbar',
    component: NavbarComponent,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
