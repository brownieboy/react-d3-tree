import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3002,
    hmr: {
      overlay: false, // ✅ Disables the error overlay
    },
  },
  // resolve: {
  //   alias: {
  //     'react-d3-tree': path.resolve(__dirname, '../'), // Forces Vite to use the linked package
  //   },
  // },
});
