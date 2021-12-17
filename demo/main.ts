import App from './App.vue'
import dm from '@/index'
import { router } from './router'
import Preview from './components/Preview'
import routes from 'pages-generated'
import { ViteSSG } from 'vite-ssg'

export const createApp = ViteSSG(App, { routes }, ({ app }) => {
  app.component('Preview', Preview)
  app.use(dm)
})
