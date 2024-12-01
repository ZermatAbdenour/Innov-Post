import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [react(), svgr()],
});

