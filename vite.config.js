import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { createRouter } from "vue-router";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    createVuePlugin(),
    {
      configureServer: [async ({ app }) => {
        const { default: routes } = await import('./routes') // Import your routes configuration
        const router = createRouter({
          history: createWebHistory(),
          routes,
        })
        app.use(router)
      }],
    },
  ],

})
