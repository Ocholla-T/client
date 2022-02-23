import { createRouter, createWebHistory } from 'vue-router';

function lazyImport(route) {
  return () => import(`../views/${route}.vue`);
}

const routes = [
  {
    path: '/signup',
    name: 'Signup',
    component: lazyImport('Signup'),
    alias: '/',
  },
  {
    path: '/login',
    name: 'Login',
    component: lazyImport('Login'),
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
