import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import ListKeywordsView from '../views/ListKeywordsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/list-keywords',
      name: 'list-keywords',
      component: ListKeywordsView,
    }
  ]
})

router.beforeEach((to, from)=>{
  const userInfoJson = localStorage.getItem('user_info')
  const userInfo = JSON.parse(`${userInfoJson}`)
  if (!userInfo.loggedIn && (to.path != '/' && to.path != '/login')) {
    return {path: '/'}
  }
})

export default router