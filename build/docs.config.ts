import { defineConfig } from 'vite'
import baseConfig from './base.config'

export default defineConfig({
  ...baseConfig,
  build: {
    outDir: 'docs',
  },
})
