import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  base: command === "build" ? "/vals-main/" : "/",
  plugins: [react()],
server: {
  headers:{
    "ngrok-skip-browser-warning": "true",
  }
,
    allowedHosts: ["superelaborately-relaxatory-kareen.ngrok-free.dev"],
  },
}));
