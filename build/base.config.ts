import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'path'
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
      pagesDir: [
        { dir: resolve(__dirname, '../src'), baseRoute: 'components' },
      ],
      extendRoute(route) {
        const _route = route
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
  ],
  resolve: {
    alias: {
      '@': srcPath,
      'dm-ui': srcPath,
    },
  },
  server: {
    port: 3090,
  },
})
