import { App, Component } from 'vue'

/** 注册组件 */
export const registerComponent = (app: App, comp: Component) => {
  const { name } = comp
  if (!name) return
  const registered = app.component(name)
  if (!registered) {
    app.component(name, comp)
  }
}
