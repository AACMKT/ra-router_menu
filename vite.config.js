import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ _command, mode }) =>{
  console.log(mode)
  if (mode !== 'development') {
    return {
      base: "/ra-router_menu",
      plugins: [react()],
    }
    
  }
  return {
    plugins: [react()]
  }
})

