<template>
  <div class="dm-doc">
    <aside>
      <div v-for="link in data.links" :key="link.id" class="link-row">
        <router-link :to="link.path">{{ link.name }}</router-link>
      </div>
    </aside>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup lang="ts">
import { readonly } from 'vue'
import componentList from '@/list.json'

let uid = 1

const data = readonly({
  links: componentList.map((item) => ({
    id: uid++,
    path: `/components/${item.name}`,
    name: item.zhName,
  })),
})
</script>

<style scoped lang="scss">
html,
body {
  margin: 0;
  padding: 0;
}
.dm-doc {
  display: flex;
  min-height: 100vh;
}

aside {
  width: 200px;
  padding: 15px;
  border-right: 1px solid #ccc;
}
main {
  width: 100%;
  flex: 1;
  padding: 15px;
}

.link-row {
  text-align: center;
}
</style>
