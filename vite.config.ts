import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
    base: "/cats-app/",
    plugins: [react(), svgr()],
    resolve: {
        alias: {
            variables: path.resolve(__dirname, "src", "_variables.scss"),
            "@assets": path.resolve(__dirname, "src", "assets"),
            "@components": path.resolve(__dirname, "src", "components"),
            "@utils": path.resolve(__dirname, "src", "utils"),
            "@hooks": path.resolve(__dirname, "src", "hooks"),
            "@routes": path.resolve(__dirname, "src", "routes"),
            "@api": path.resolve(__dirname, "src", "services", "api"),
            "@store": path.resolve(__dirname, "src", "services", "store"),
        },
    },
});
