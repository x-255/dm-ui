import { COMPONENT_PREFIX } from '../_config'
import { Component, App } from 'vue'

/**补全组件名前缀 */
export const compNameCompetion = (comp: Component) => COMPONENT_PREFIX + comp.name

/** 注册组件 */
export const registerComponent = (app: App, comp: Component) => {
  const name = compNameCompetion(comp)
  const registered = app.component(name)
  if (!registered) {
    app.component(name, comp)
  }
}
