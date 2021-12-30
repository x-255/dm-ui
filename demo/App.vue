<template>
  <div class="doc">
    <aside>
      <router-link
        v-for="nav in navs"
        :key="nav.id"
        class="link-row"
        :to="nav.path"
        >{{ nav.name }}</router-link
      >
    </aside>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup lang="ts">
import { readonly } from 'vue'
import { kebabCase } from 'lodash-es'
import componentList from '@/list.json'

let uid = 1

const navs = readonly(
  componentList.map((item) => ({
    id: uid++,
    path: `/components/${kebabCase(item.dirname)}`,
    name: item.zhName,
  })),
)
</script>

<style scoped lang="scss">
.doc {
  display: flex;
  min-height: 100vh;
}

aside {
  width: 200px;
  height: 100vh;
  border-right: 1px solid #ccc;
  padding: 15px;
  overflow-y: auto;
  box-sizing: border-box;
}
main {
  width: 100%;
  flex: 1;
  padding: 15px;
  height: 100vh;
  overflow-y: auto;
  box-sizing: border-box;
}

.link-row {
  display: block;
  padding: 0.625rem 2rem 0.625rem 1.5rem;
  line-height: 1.5;
  font-size: 0.9rem;
  margin: 0 8px;
  border-radius: 8px;
  text-decoration: none;
  color: #606266;

  &:hover {
    color: #409eff;
  }

  &.router-link-exact-active {
    font-weight: 600;
    color: #409eff;
    background-color: #ecf5ff;
  }
}
</style>
