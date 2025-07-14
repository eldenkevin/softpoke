import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // 네트워크에서도 접근 가능하게 설정
    // port: 5173, // 필요시 포트 지정
  },
});
