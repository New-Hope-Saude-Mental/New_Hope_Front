import { createRouter, createWebHistory } from 'vue-router'
import HomeComponent from '../components/HomeComponent.vue'
import NavbarComponent from '../components/NavbarComponent.vue'
import PerguntasComponent from '../components/PerguntasComponent.vue'
import InformacoesComponent from '../components/InformacoesComponent.vue'
import DepoimentosComponent from '../components/DepoimentosComponent.vue'



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
  {
    path: '/Depoimentos',
    name: 'DepoimentosComponent',
    component: DepoimentosComponent,
  },  
  {
    path: '/Informacoes',
    name: 'InformacoesComponent',
    component: InformacoesComponent,
  },  
  {
    path: '/Perguntas',
    name: 'PerguntasComponent',
    component: PerguntasComponent,
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
