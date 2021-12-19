import { mount } from '@vue/test-utils'
import Button from '../src/index.vue'

describe('按钮测试', () => {
  test('button test', () => {
    const content = 'hellow'
    const wrapper = mount(Button, {
      slots: {
        default: content,
      },
    })
    expect(wrapper.text()).toBe(content)
  })
})
