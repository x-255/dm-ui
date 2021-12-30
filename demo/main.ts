import 'font-awesome/css/font-awesome.min.css'
import routes from 'pages-generated'
import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import PreviewBox from './components/PreviewBox'

export const createApp = ViteSSG(App, { routes }, ({ app }) => {
  app.component('PreviewBox', PreviewBox)
})
