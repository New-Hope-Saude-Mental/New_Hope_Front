import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../components/HomeView.vue'
import NavbarComponent from '../components/NavbarComponent.vue'
import PerguntasView from '../components/PerguntasView.vue'
import InformacoesView from '../components/InformacoesView.vue'
import DepoimentosView from '../components/DepoimentosView.vue'



const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },  
  {
    path: '/menu',
    name: 'Navbar',
    component: NavbarComponent,
  },  
  {
    path: '/Depoimentos',
    name: 'DepoimentosView',
    component: DepoimentosView,
  },  
  {
    path: '/Informacoes',
    name: 'InformacoesView',
    component: InformacoesView,
  },  
  {
    path: '/Perguntas',
    name: 'PerguntasView',
    component: PerguntasView,
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
