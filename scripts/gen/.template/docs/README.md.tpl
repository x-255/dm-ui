<script setup>
import DocsDemo from './docs-demo.vue'
import raw from './docs-demo.vue?raw'
</script>

# {{ desc }}

<preview-box :raw="raw"><docs-demo /></preview-box>
