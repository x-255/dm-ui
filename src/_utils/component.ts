import { App, Component } from 'vue'

/** 补全组件名前缀 */

/** 注册组件 */
export const registerComponent = (app: App, comp: Component) => {
  const name = comp.name!
  const registered = app.component(name)
  if (!registered) {
    app.component(name, comp)
  }
}
