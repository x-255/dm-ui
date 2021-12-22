<template>
  <button class="dm-button"><slot></slot></button>
</template>

<script lang="ts">
export default { name: 'DmButton' }
</script>

<script lang="ts" setup>
export interface DmButtonProps {
  type?: string
  size?: string
}

export interface DmButtonEmits {
  (e: 'click'): void
}

// eslint-disable-next-line no-unused-vars
const props = defineProps<DmButtonProps>()
// eslint-disable-next-line no-unused-vars
const emit = defineEmits<DmButtonEmits>()
</script>

<style>
.dm-button {
}
</style>
