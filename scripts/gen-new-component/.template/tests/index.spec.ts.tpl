import { mount } from '@vue/test-utils'
import {{ name }} from '../src/index.vue'

describe('{{ zhName }}测试', () => {
  test('{{ name }} test', () => {
    const wrapper = mount({{ name }}, {})
    expect(wrapper).toBeTruthy()
  })
})