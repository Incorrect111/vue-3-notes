import {
  createRouter,
  createWebHistory
} from 'vue-router';

const routerHistory = createWebHistory();
import HomePage from './pages/home.vue'
import AboutPage from './pages/about.vue'
import NotFoundPage from './pages/notFound.vue'

const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage
    },
    {
      path: '/:CatchAll(.*)',
      name: '404',
      component: NotFoundPage
    }
  ],
})

export default router;