import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react()],
    define: {
      // This exposes the Vercel Environment Variable to the client-side code
      'process.env.API_KEY': JSON.stringify(env.API_KEY || '')
    }
  }
})