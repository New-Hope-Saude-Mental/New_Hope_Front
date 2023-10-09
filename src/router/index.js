import { createRouter, createWebHistory } from 'vue-router'
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

export const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
