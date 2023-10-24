import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../components/HomeView.vue";
import NavbarComponent from "../components/NavbarComponent.vue";
import PerguntasView from "../components/PerguntasView.vue";
import InformacoesView from "../components/InformacoesView.vue";
import DepoimentosView from "../components/DepoimentosView.vue";
// import FooterComponent from '../components/FooterComponent.vue'
import Termos from "@/components/TermosComponent.vue";

const routes = [
  {
    path: "/",
    name: "HomeView",
    component: HomeView,
  },
  {
    path: "/menu",
    name: "Navbar",
    component: NavbarComponent,
  },
  {
    path: "/Depoimentos",
    name: "DepoimentosView",
    component: DepoimentosView,
  },
  {
    path: "/Informacoes",
    name: "InformacoesView",
    component: InformacoesView,
  },
  {
    path: "/Perguntas",
    name: "PerguntasView",
    component: PerguntasView,
  },
  {
    path: "/Termos",
    name: "Termos",
    component: Termos,
  },
  // {
  //   path: '/Footer',
  //   name: 'FooterComponent',
  //   component:FooterComponent,
  // },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
