import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import techSide from '@/views/techSide.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/tech',
      name: 'techSide',
      component: techSide
    },
  ]
})

export default router
