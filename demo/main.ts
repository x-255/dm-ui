import routes from 'pages-generated'
import { ViteSSG } from 'vite-ssg'
import dm from '@/index'
import App from './App.vue'
import Preview from './components/Preview'
import 'virtual:windi.css'
import 'virtual:windi-devtools'

export const createApp = ViteSSG(App, { routes }, ({ app }) => {
  app.component('Preview', Preview)
  app.use(dm)
})
