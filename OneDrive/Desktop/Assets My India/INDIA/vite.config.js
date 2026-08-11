import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  const isBuild = command === 'build';
  return {
    base: isBuild ? '/India-independence/' : '/',
    plugins: [
      react(),
      tailwindcss(),
      isBuild && {
        name: 'replace-asset-paths',
        transform(code, id) {
          if (/\.(js|jsx|ts|tsx)$/.test(id) && !id.includes('node_modules')) {
            let newCode = code;
            newCode = newCode.replace(/"\/images\//g, '"/India-independence/images/');
            newCode = newCode.replace(/'\/images\//g, "'/India-independence/images/");
            newCode = newCode.replace(/"\/audio\//g, '"/India-independence/audio/');
            newCode = newCode.replace(/'\/audio\//g, "'/India-independence/audio/");
            newCode = newCode.replace(/"\/videos\//g, '"/India-independence/videos/');
            newCode = newCode.replace(/'\/videos\//g, "'/India-independence/videos/");
            return {
              code: newCode,
              map: null
            };
          }
        }
      }
    ].filter(Boolean)
  }
})
