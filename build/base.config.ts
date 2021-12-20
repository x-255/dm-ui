import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import fs from 'fs-extra'
import matter from 'gray-matter'
import { resolve } from 'path'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
import Markdown from 'vite-plugin-md'
import VitePages from 'vite-plugin-pages'

const srcPath = resolve(__dirname, '../src')

export default defineConfig({
  plugins: [
    vue({ include: [/\.vue$/, /\.md$/] }),
    vueJsx(),
    Markdown(),
    VitePages({
      extensions: ['md'],
      pagesDir: [{ dir: resolve(__dirname, '../src'), baseRoute: 'components' }],
      extendRoute(route) {
        const _route = route
        const path = resolve(__dirname, '..', _route.component.slice(1))
        const md = fs.readFileSync(path, 'utf-8')
        const { data } = matter(md)
        _route.meta = Object.assign(_route.meta || {}, { frontmatter: data })

        if (_route.component.endsWith('README.md')) {
          const compRe = /\/src\/([a-z-]+)\/docs\/README\.md/
          // eslint-disable-next-line no-unused-vars
          const [_, name] = compRe.exec(_route.component)
          _route.name = name
          _route.path = `/components/${name}`
        }

        return _route
      },
    }),
    Components({
      dirs: [srcPath],
      extensions: ['vue', 'md'],
      deep: true,
      dts: true,
      resolvers: [ElementPlusResolver()],
      include: [/\.vue$/, /\.vue\?vue/, /\.vue\?raw/, /\.md$/],
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
