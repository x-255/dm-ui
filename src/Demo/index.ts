import { registerComponent, SFCWithInstall } from '../_utils'
import _DmDemo from './src/index.vue'

const DmDemo = _DmDemo as SFCWithInstall<typeof _DmDemo>

DmDemo.install = (app) => {
  registerComponent(app, DmDemo)
}

export { DmDemo }
export * from './src/index.vue'

declare module 'vue' {
  export interface GlobalComponents {
    DmDemo: typeof _DmDemo
  }
}
