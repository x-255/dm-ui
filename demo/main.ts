import dm from '@/index'
import routes from 'pages-generated'
import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import Preview from './components/Preview'

export const createApp = ViteSSG(App, { routes }, ({ app }) => {
  app.component('Preview', Preview)
  app.use(dm)
})
