<template>
  <div class="flex min-h-screen">
    <aside class="w-200px p-15px border divide-x-reverse">
      <div v-for="link in navs" :key="link.id" class="text-center">
        <router-link
          :to="link.path"
          class="text-gray-900 hover:text-blue-600"
          >{{ link.name }}</router-link
        >
      </div>
    </aside>
    <main class="w-full flex-1 p-15px">
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup lang="ts">
import { readonly } from 'vue'
import componentList from '@/list.json'

let uid = 1

const navs = readonly(
  componentList.map((item) => ({
    id: uid++,
    path: `/components/${item.name}`,
    name: item.zhName,
  })),
)
</script>

<style scoped lang="scss">
html,
body {
  margin: 0;
  padding: 0;
}
.router-link-active {
  @apply text-blue-600;
}
</style>
