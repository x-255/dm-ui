import { Plugin } from 'vue'
import * as components from './components'
import { isVuePlugin } from './_utils'

export const setup: Plugin = {
  install(app) {
    Object.keys(components).forEach((key) => {
      const plugin = components[key as keyof typeof components]
      if (isVuePlugin(plugin)) {
        app.use(plugin)
      }
    })
  },
}
