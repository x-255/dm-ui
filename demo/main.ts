import routes from 'pages-generated'
import { ViteSSG } from 'vite-ssg'
import DmUi from '@/index'
import App from './App.vue'
import Preview from './components/Preview'

export const createApp = ViteSSG(App, { routes }, ({ app }) => {
  app.component('Preview', Preview)
  app.use(DmUi)
})
