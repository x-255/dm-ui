<template>
  <div class="{{ className }}"></div>
</template>

<script lang="ts">
  export default { name: '{{ name }}' }
</script>

<script lang="ts" setup>
  import { ref } from 'vue'
</script>

<style>
  .{{ className }} {
  }
</style>
