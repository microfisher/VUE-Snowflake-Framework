import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// import nodePolyfills from 'rollup-plugin-polyfill-node';
// const production = process.env.NODE_ENV === 'production';

const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      reactivityTransform: true,
    }),
    WindiCSS(),
    AutoImport({
      resolvers: [
        ElementPlusResolver()
      ],
    }),
    Components({
      resolvers: [
        IconsResolver(),
        ElementPlusResolver(),
      ]
    }),
    Icons({ autoInstall: true }),
    // !production && nodePolyfills({
    //   include: ['node_modules/**/*.js', new RegExp('node_modules/.vite/.*js')]
    // })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '/src'),
    },
  },
  // build: {
  //   rollupOptions: {
  //     plugins: [
  //       nodePolyfills()
  //     ]
  //   },
  //   commonjsOptions: {
  //     transformMixedEsModules: true
  //   }
  // }
})
