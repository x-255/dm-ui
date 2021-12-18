<template>
  <button class="dm-button"><slot></slot></button>
</template>

<script lang="ts">
export default { name: 'DmButton' }
</script>

<script lang="ts" setup>
import { ref } from 'vue'
</script>

<style>
.dm-button {
}
</style>
