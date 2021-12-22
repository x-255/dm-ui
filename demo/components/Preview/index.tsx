import Prism from 'prismjs'
import { defineComponent, onMounted, ref } from 'vue'
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
      <div class="border rounded border-dashed border-gray-400">
        <section class="m-15px">{slots.default?.()}</section>

        <div
          class="max-h-500px"
          style={{ display: codeVisible.value ? 'block' : 'none' }}
        >
          <pre class="py-15px">
            <code class="language-html">{props.raw}</code>
          </pre>
        </div>

        <div
          class="h-40px leading-40px text-center cursor-pointer border-t border-dashed border-gray-400"
          onClick={showSourceCode}
        >
          查看代码
        </div>
      </div>
    )
  },
})
