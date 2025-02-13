import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      'react-d3-tree': path.resolve(__dirname, '../lib/esm/index.js'),
      symlinks: false,  // Just in case there are some still hanging around
    },
  },
});
