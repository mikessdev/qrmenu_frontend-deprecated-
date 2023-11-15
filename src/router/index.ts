import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from '@/pages/LandingPage.vue';
import HomePage from '@/pages/HomePage.vue';
import LoginPage from '@/pages/LoginPage.vue';
import RegisterPage from '@/pages/RegisterPage.vue';
import RegisterCompletePage from '@/pages/RegisterCompletePage.vue';
import SelectMenuPage from '@/pages/SelectMenuPage.vue';
import authMiddleware from '@/middleware/auth';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landingPage',
      component: LandingPage
    },
    {
      path: '/restaurant',
      name: 'home',
      component: HomePage
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterPage
    },
    {
      path: '/register-complete',
      name: 'register-complete',
      component: RegisterCompletePage,
      beforeEnter: () => authMiddleware()
    },
    {
      path: '/select-menu',
      name: 'select-menu',
      component: SelectMenuPage,
      beforeEnter: () => authMiddleware()
    }
  ]
});

export default router;
