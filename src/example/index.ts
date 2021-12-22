import { registerComponent, SFCWithInstall } from '../_utils'
import Example from './src/index.vue'

const DmExample = Example as SFCWithInstall<typeof Example>

DmExample.install = (app) => {
  registerComponent(app, DmExample)
}

export { DmExample }
