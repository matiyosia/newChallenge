// Composables
import { ROUTES } from '@/config/constant'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: ROUTES.BASE,
    component: () => import('@/views/masterPage.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
      },
      {
        path: ROUTES.SETTING_PROFILE,
        name: 'setting',
        component: () => import('@/views/userProfile/UserProfile.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
