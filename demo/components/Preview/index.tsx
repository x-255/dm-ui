import Prism from 'prismjs'
import { Component, defineAsyncComponent, defineComponent, h, markRaw, ref } from 'vue'
import './index.scss'
import './prism.css'

export default defineComponent({
  name: 'Preview',
  props: {
    compName: {
      type: String,
      required: true,
    },
    docsName: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const sourceCode = ref('')
    let comp = markRaw<Component>({})

    comp = defineAsyncComponent(
      () => import(`../../../src/${props.compName}/docs/${props.docsName}.vue`),
    )
    const getRaw = () => {
      const path = `../../src/${props.compName}/docs/${props.docsName}`

      if (import.meta.env.PROD) {
        return fetch(`${path}.vue`)
          .then((res) => res.text())
          .catch(() => '')
      }
      return import(`../${path}.vue?raw`).then((c) => {
        sourceCode.value = c?.default ?? ''
      })
    }

    getRaw().then(() => {
      Prism.highlightAll()
    })

    const codeVisible = ref(false)

    const showSourceCode = () => {
      codeVisible.value = !codeVisible.value
    }

    return () => (
      <div class="preview">
        <section>{h(comp)}</section>

        <div class="source-code" style={{ display: codeVisible.value ? 'block' : 'none' }}>
          <pre class="language-html">
            <code class="language-html">{sourceCode.value}</code>
          </pre>
        </div>

        <div class="preview-bottom" onClick={showSourceCode}>
          查看代码
        </div>
      </div>
    )
  },
})
