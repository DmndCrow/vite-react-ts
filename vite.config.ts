import { resolve } from 'path';

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      features: resolve(__dirname, 'src/features'),
      components: resolve(__dirname, 'src/components'),
      modules: resolve(__dirname, 'src/modules'),
      hooks: resolve(__dirname, 'src/hooks'),
      contexts: resolve(__dirname, 'src/contexts'),
      services: resolve(__dirname, 'src/services'),
      styles: resolve(__dirname, 'src/styles'),
      assets: resolve(__dirname, 'src/assets'),
      store: resolve(__dirname, 'src/store'),
      utils: resolve(__dirname, 'src/utils'),
    },
  },
});
