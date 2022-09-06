import {
  defineConfig
} from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  /* server: {
    proxy: {
      "/api": {
        target: "https://www.fastmock.site/mock/ece59885ba4eb4db7e1936e4ddf39d93/personList/api/person",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, "")
      }
    }
  }, */
  base: './',
  build: {
    outDir: './doc'
  }
})