import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/portfoilio_website/', // <--- IMPORTANT: Change 'your-repo-name' to your actual repo name!
  // Example: If your repo is named 'my-portfolio-app', it would be '/my-portfolio-app/'
});