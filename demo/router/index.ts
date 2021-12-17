import { createRouter, createWebHistory, Router, RouteRecordRaw } from 'vue-router'
import componentList from '@/list.json'
import routes from 'pages-generated'

const getRouteRecord = (name: string, title: string): RouteRecordRaw => ({
  name,
  path: `/components/${name}`,
  component: () => import(`../../../src/${name}/docs/README.md`),
  meta: { title },
})

// const getRoutes = () => componentList.map((c) => getRouteRecord(c.name, c.zhName))

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to: any, from: any) {
    if (to.path !== from.path) {
      return { top: 0 }
    }
  },
})
