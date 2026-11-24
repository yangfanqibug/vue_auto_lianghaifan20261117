import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// GitHub Pages 部署在 /<repo>/ 子路径下；本地开发仍使用根路径。
// 仓库名从 GITHUB_REPOSITORY 读取，改名后无需再改这里。
const repoName = (process.env.GITHUB_REPOSITORY || '').split('/')[1] || ''

// https://vite.dev/config/
export default defineConfig({
  base: process.env.GITHUB_ACTIONS ? `/${repoName}/` : '/',
  plugins: [vue()],
})
