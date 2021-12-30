<script setup>
import BaseDemo from './BaseDemo.vue'
import baseRaw from './BaseDemo.vue?raw'
</script>

# {{ zhName }} {{ dirname }}
{{ desc }}

## 基础用法

<preview-box :raw="raw"><base-demo /></preview-box>
