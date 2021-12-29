import routes from 'pages-generated'
import { ViteSSG } from 'vite-ssg'
import Ui from '@/index'
import App from './App.vue'
import Preview from './components/preview-box'

export const createApp = ViteSSG(App, { routes }, ({ app }) => {
  app.component('PreviewBox', Preview)
  app.use(Ui)
})
