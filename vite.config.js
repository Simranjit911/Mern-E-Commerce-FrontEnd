import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
// define:{
//   'import.meta.env.PATH': JSON.stringify(import.meta.env.PATH),
// }