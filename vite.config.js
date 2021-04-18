import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import macro from "vite-plugin-babel-macros";

module.exports = defineConfig({
    root: "src/client",
    // prettier-ignore
    plugins: [
        reactRefresh(), 
        macro(),
    ],
    // prettier-ignore-end
    resolve: {
        alias: {
            utils: "./utils",
            components: "./components",
        },
    },
});
