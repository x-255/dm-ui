import { Plugin } from 'vue'
import * as components from './components'

export const setup: Plugin = {
  install(app) {
    Object.keys(components).forEach((key) => {
      const plugin = components[key as keyof typeof components]
      app.use(plugin)
    })
  },
}
