import { registerComponent, SFCWithInstall } from '../_utils'
import Button from './src/index.vue'

const DmButton = Button as SFCWithInstall<typeof Button>

DmButton.install = (app) => {
  registerComponent(app, DmButton)
}

export { DmButton }
