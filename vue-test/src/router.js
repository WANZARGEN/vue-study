import Vue from 'vue'
import Router from 'vue-router'

import TopBar from '@/components/TopBar.vue'
import SideBar from '@/components/SideBar.vue'

import Home from '@/views/Home.vue'

import Menu from '@/components/Menu.vue'
import UserList from '@/components/UserList.vue'
import Video from '@/components/Video.vue'
import Hello from '@/components/Hello.vue'

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
        default: Home
      },
      children: [
        {
          path: '/',
          component: Menu
        },
        {
          path: '/user-list',
          component: UserList
        },
        {
          path: '/video',
          component: Video
        },
        {
          path: '/hello',
          component: Hello
        }
      ]
    },
    
  ]
})
