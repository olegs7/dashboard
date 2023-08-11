import { createRouter, createWebHistory } from 'vue-router'

import Sidebar from '../components/layout/Sidebar.vue'

// pages
import Maps from '../components/pages/Maps.vue'
import ListUsers from '../components/pages/UserProfile/ListUsers.vue'
import NewUser from '../components/pages/UserProfile/NewUser.vue'
import EditUser from '../components/pages/UserProfile/EditUser.vue'
import Settings from '../components/pages/Settings.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/maps',
      component: Maps,
    },
    {
      path: '/list-users',
      component: ListUsers,
    },
    {
      path: '/new-user',
      component: NewUser,
    },
    {
      path: '/edit:id',
      component: EditUser,
    },
    {
      path: '/settings',
      component: Settings,
    },
    
  ]
})

export default router
