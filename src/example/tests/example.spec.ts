import { mount } from '@vue/test-utils'
import Example from '../src/index.vue'

describe('栗子测试', () => {
  test('Example test', () => {
    const wrapper = mount(Example)
    expect(wrapper)
  })
})
