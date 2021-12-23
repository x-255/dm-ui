import Prism from 'prismjs'
import { defineComponent, onMounted, ref } from 'vue'
import { UnfoldMoreFilled } from '@vicons/material'
import { Icon } from '@vicons/utils'
import './index.scss'
import './prism.css'

export default defineComponent({
  name: 'Preview',
  props: {
    raw: {
      type: String,
      required: true,
    },
  },
  setup(props, { slots }) {
    onMounted(() => {
      Prism.highlightAll()
    })

    const codeVisible = ref(false)

    const showSourceCode = () => {
      codeVisible.value = !codeVisible.value
    }

    return () => (
      <div class="preview">
        <div class="handlers">
          <div class="handles__item" onClick={showSourceCode}>
            <Icon size="16">
              <UnfoldMoreFilled />
            </Icon>
          </div>
        </div>
        <section>{slots.default?.()}</section>

        <div
          class="source-code"
          style={{ display: codeVisible.value ? 'block' : 'none' }}
        >
          <pre class="language-html">
            <code class="language-html">{props.raw}</code>
          </pre>
        </div>
      </div>
    )
  },
})
