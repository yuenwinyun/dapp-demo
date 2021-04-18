import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";

module.exports = defineConfig({
    root: "src/client",
    // prettier-ignore
    plugins: [
        reactRefresh(),
    ],
    // prettier-ignore-end
    resolve: {
        alias: {
            utils: "./utils",
            components: "./components",
        },
    },
});
