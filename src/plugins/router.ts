import { createRouter, createWebHistory } from 'vue-router';

const Home = () => import('../pages/Home.vue');
const ManageLevelZero = () => import('../pages/ManageLevelZero.vue');
const ManageCharacters = () => import('../pages/ManageCharacters.vue');
const ManageRandomTables = () => import('../pages/ManageRandomTables.vue');

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/manage-level-zero',
    name: 'ManageLevelZero',
    component: ManageLevelZero
  },
  {
    path: '/manage-character',
    name: 'manageCharacters',
    component: ManageCharacters
  },
  {
    path: '/manage-random-tables',
    name: 'ManageRandomTables',
    component: ManageRandomTables
  }
];

export const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
