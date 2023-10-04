import { createRouter, createWebHistory } from 'vue-router'

import AdminLogin from '../components/pages/AdminLogin.vue'
import Sidebar from '../components/layout/Sidebar.vue'

// pages
import ListUsers from '../components/pages/UserProfile/ListUsers.vue'
import NewUser from '../components/pages/UserProfile/NewUser.vue'
import EditUser from '../components/pages/UserProfile/EditUser.vue'

import ListProducts from '../components/pages/Products/ListProducts.vue'
import NewProduct from '../components/pages/Products/NewProduct.vue'
import EditProduct from '../components/pages/Products/EditProduct.vue'

import Maps from '../components/pages/Maps.vue'
import Price from '../components/pages/Price.vue'
import Analytics from '../components/pages/Analytics.vue'
import Settings from '../components/pages/Settings.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [ 
    {
      path: '/',
      component: AdminLogin,
      redirect: '/admin-login',
    },
    {
      path: '/admin-login',
      component: AdminLogin,
    },
    {
      path: '/admin',
      component: Sidebar,
      redirect: '/admin/list-users',
      children:[
        {
          path: 'list-users',
          component: ListUsers,
        },
        {
          path: 'new-user',
          component: NewUser,
        },
        {
          path: 'edit/:id',
          component: EditUser,
        },
        {
          path: 'list-products',
          component: ListProducts,
        },
        {
          path: 'new-product',
          component: NewProduct,
        },
        {
          path: 'edit-product/:id',
          component: EditProduct,
        },
        {
          path: 'maps',
          component: Maps,
        },
        {
          path: 'analytics',
          component: Analytics,
        },
        {
          path: 'price',
          component: Price,
        },
        {
          path: 'settings',
          component: Settings,
        },
      ]
    },     
  ]
})

export default router
