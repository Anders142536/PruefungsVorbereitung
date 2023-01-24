import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AddPersonView from '@/views/AddPersonView.vue';
import SinglePersonView from '@/views/SinglePersonView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/add',
      name: '/addPerson',
      component: AddPersonView
    },
    {
      path: '/:userID',
      name: 'singleUser',
      component: SinglePersonView
    }
  ]
});

export default router;
