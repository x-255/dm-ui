import { registerComponent, SFCWithInstall } from '../_utils'
import _{{ name }} from './src/index.vue'

const {{ name }} = _{{ name }} as SFCWithInstall<typeof _{{ name }}>

{{ name }}.install = (app) => {
  registerComponent(app, {{ name }})
}

export { {{ name }} }
export * from './src/index.vue'

declare module 'vue' {
  export interface GlobalComponents {
    {{ name }}: typeof _{{ name }}
  }
}
