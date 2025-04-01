import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Login from '../views/Login.vue';
import Registro from '../views/Registro.vue';
import MenuJardin from '../views/MenuJardin.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/login', name: 'Login', component: Login },
  { path: '/registro', name: 'Registro', component: Registro },
  { path: '/jardin', name: 'Jardin', component: MenuJardin}
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;