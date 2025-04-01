import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'url';

export default defineConfig(({ mode }) => {
  return {
    base: '/',
    plugins: [react({})],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    server: {
      port: 3000,
      open: true,
      watch: {
        usePolling: true,
      },
    },
    build: {
      sourcemap: mode === 'development',
      minify: 'esbuild',
      rollupOptions: {
        output: {},
      },
    },
    clearScreen: false,
    optimizeDeps: {
      include: ['react', 'react-dom'],
    },
  };
});
