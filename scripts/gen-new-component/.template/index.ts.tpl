import { registerComponent, SFCWithInstall } from '../_utils'
import {{ name }} from './src/index.vue'

const Dm{{ name }} = {{ name }} as SFCWithInstall<typeof {{ name }}>

Dm{{ name }}.install = (app) => {
  registerComponent(app, Dm{{ name }})
}

export { Dm{{ name }} }

declare module 'vue' {
  export interface GlobalComponents {
    Dm{{ name }}: typeof import('./src/index.vue').default
  }
}
