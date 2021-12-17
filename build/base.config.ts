import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Markdown from 'vite-plugin-md'
import VitePages from 'vite-plugin-pages'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import fs from 'fs-extra'
import matter from 'gray-matter'

const srcPath = resolve(__dirname, '../src')

const __DEV__ = process.env.NODE_ENV !== 'production'

export default defineConfig({
  plugins: [
    vue({ include: [/\.vue$/, /\.md$/] }),
    vueJsx(),
    Markdown(),
    VitePages({
      extensions: ['md'],
      pagesDir: [{ dir: resolve(__dirname, '../src'), baseRoute: 'components' }],
      extendRoute(route) {
        const path = resolve(__dirname, '..', route.component.slice(1))
        const md = fs.readFileSync(path, 'utf-8')
        const { data } = matter(md)
        route.meta = Object.assign(route.meta || {}, { frontmatter: data })
        if (route.component.endsWith('README.md')) {
          const compRe = /\/src\/([a-z-]+)\/docs\/README\.md/
          const [_, name] = compRe.exec(route.component)
          route.name = name
          route.path = `/components/${name}`
        }
        console.log(`route====`, route)
        return route
      },
    }),
    Components({
      dirs: [srcPath],
      extensions: ['vue', 'md'],
      deep: true,
      dts: true,
      resolvers: [ElementPlusResolver()],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
    }),
  ],
  resolve: {
    alias: {
      '@': srcPath,
    },
  },
  server: {
    port: 3090,
  },
})
