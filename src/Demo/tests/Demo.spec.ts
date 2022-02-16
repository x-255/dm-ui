import { mount } from '@vue/test-utils'
import DmDemo from '../src/index.vue'

describe('Demo', () => {
  test('DEMO测试', () => {
    const wrapper = mount(DmDemo)
    expect(wrapper)
  })
})
