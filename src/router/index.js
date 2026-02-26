import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/module-1',
    component: () => import('@/modules/Module1FourLayers/Landing.vue')
  },
  {
    path: '/module-1/level-1',
    component: () => import('@/modules/Module1FourLayers/Level1Directives.vue')
  },
  {
    path: '/module-1/level-2',
    component: () => import('@/modules/Module1FourLayers/Level2Orchestrator.vue')
  },
  {
    path: '/module-1/level-3',
    component: () => import('@/modules/Module1FourLayers/Level3Agents.vue')
  },
  {
    path: '/module-1/level-4',
    component: () => import('@/modules/Module1FourLayers/Level4Output.vue')
  },
  {
    path: '/module-1/completion',
    component: () => import('@/modules/Module1FourLayers/Completion.vue')
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('@/views/Dashboard.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
