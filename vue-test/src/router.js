import Vue from 'vue'
import Router from 'vue-router'

import TopBar from '@/layout/TopBar.vue'
import SideBar from '@/layout/SideBar.vue'
import MainTemplate from '@/layout/MainTemplate.vue'

// import Home from '@/views/Home.vue'

// import UserList from '@/components/UserList.vue'
// import Video from '@/components/Video.vue'
import Hello from '@/components/Hello.vue'
import DashCard from '@/components/DashCard.vue'
import WideCard from '@/components/WideCard.vue'
// import RegionCard from '@/components/RegionCard.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      components: {
        SideBar: SideBar,
        TopBar: TopBar,
        default: MainTemplate
      },
      children: [
        {
          path: '/',
          component: () => import('@/views/Home.vue')
        },
        {
          path: '/user-list',
          component: () => import('@/components/UserList.vue')
        },
        {
          path: '/video',
          component: () => import('@/components/Video.vue')
        },
        {
          path: '/hello',
          component: Hello
        },
        {
          path: '/dash-card',
          component: DashCard
        },
        {
          path: '/wide-card',
          component: WideCard
        },
        {
          path: '/region-card',
          component: () => import('@/components/RegionCard.vue')
        },
      ]
    },
    
  ]
})
