import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{
      '/api': 'https://youtubebackend-0s8q.onrender.com'
    },
    host: true,
  },
  plugins:[react()]
})
