import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),//为了在github page跑专门改的hash模式 详细见https://router.vuejs.org/zh/guide/essentials/history-mode
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/user/myself.vue')
    },
    {
      path: '/explore',
      name: 'explore',
      component: () => import('../views/explore.vue')
    },
    {
      path: '/create',
      name: 'create',
      component: () => import('../views/create/CreatePage.vue'),
    },
    {
      path: '/createplan/:id',
      name: 'createplan',
      component: () => import('../views/create/Createplan.vue'),
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: () => import('../views/wiki/DetailView.vue'),
    },
    {
      path: '/finish/:id',
      name: 'finish',
      component: () => import('../views/party/finish.vue'),
    },
    {
      path: '/travels/:id',
      name: 'travels',
      component: () => import('../views/party/travels.vue'),
    },
    {
      path: '/alltravelshave/',
      name: 'alltravelshave',
      component: () => import('../views/party/alltravelshave.vue'),
    },
    {
      path: '/alltravels/',
      name: 'alltravels',
      component: () => import('../views/party/alltravels.vue'),
    },
    {
      path: '/about/:id',
      name: 'about-others',
      component: () => import('../views/user/userpage.vue')
    },
    {
      path: '/itinerarys/:id',
      name: 'itinerary',
      component: () => import('../views/party/itinerary.vue'),
      meta: { keepAlive: false }
    },
    {
      path: '/myitinerarys/:id',
      name: 'myitinerary',
      component: () => import('../views/party/myitinerary.vue'),
      meta: { keepAlive: false }
    },
    {
      path: '/partys/:id',
      name: 'party',
      component: () => import('../views/party/party.vue'),
      meta: { keepAlive: false }
    },
    {
      path: '/merplan/:id',
      name: 'merplan',
      component: () => import('../views/party/merplan.vue'),
      meta: { keepAlive: false }
    },
    {
      path: '/member/:id',
      name: 'member',
      component: () => import('../views/party/member.vue'),

    },
    {
      path: '/ifollow/:id',
      name: '我的关注',
      component: () => import('../views/user/ifollow.vue'),

    },
    {
      path: '/followme/:id',
      name: '我的粉丝',
      component: () => import('../views/user/followme.vue'),

    },
  ]
})

export default router
