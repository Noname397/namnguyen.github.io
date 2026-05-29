import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // namnguyen.github.io is a user page → served from root, not /repo-name/
  base: "/",
})
