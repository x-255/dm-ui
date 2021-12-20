import routes from 'pages-generated'
import { createRouter, createWebHistory } from 'vue-router'

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to: any, from: any, savedPosition: any) {
    if (savedPosition) {
      return savedPosition
    }
    return { x: 0, y: 0 }
  },
})
