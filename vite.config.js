import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Prostate/',  // 一定要加上你的 repo 名称
  plugins: [react()],
});
