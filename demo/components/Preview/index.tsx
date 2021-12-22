import Prism from 'prismjs'
import { defineComponent, onMounted, ref } from 'vue'
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
        <section>{slots.default?.()}</section>

        <div
          class="source-code"
          style={{ display: codeVisible.value ? 'block' : 'none' }}
        >
          <pre class="language-html">
            <code class="language-html">{props.raw}</code>
          </pre>
        </div>

        <div class="preview-bottom" onClick={showSourceCode}>
          查看代码
        </div>
      </div>
    )
  },
})
