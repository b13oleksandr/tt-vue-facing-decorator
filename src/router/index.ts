import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/post',
      name: 'new-post',
      component: () => import('../views/NewPost')
    },
    {
      path: '/post/:id',
      name: 'edit-post',
      component: () => import('../views/NewPost')
    },
  ]
})

export default router
