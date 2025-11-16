import { createRouter, createWebHistory } from 'vue-router';

import Home from '../pages/Home.vue';
import ManageLevelZero from '../pages/ManageLevelZero.vue';
import manageCharacters from '../pages/ManageCharacters.vue';
import ManageRandomTables from '../pages/ManageRandomTables.vue';

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
    component: manageCharacters
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
