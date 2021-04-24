import { resolve } from "path";
import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import autoImportDefineSafeFC from "./vite-plugin-auto-import-defineSafeFC";
import twstyled from "vite-plugin-twstyled";

export default defineConfig({
    build: {
        outDir: resolve("./dist"),
        emptyOutDir: true,
        sourcemap: true,
        minify: "terser",
    },
    root: resolve(__dirname, "./src/client"),
    publicDir: resolve(__dirname, "public"),
    plugins: [
        twstyled(),
        reactRefresh(),
        autoImportDefineSafeFC({
            exclude: /.*defineSafeFC.ts/g,
            statements: {
                defineSafeFC: 'import { defineSafeFC } from "@/utils/defineSafeFC"',
            },
        }),
    ],
    resolve: {
        alias: [
            { find: "@/utils", replacement: resolve(__dirname, "src/client/utils") },
            { find: "@/components", replacement: resolve(__dirname, "src/client/components") },
        ],
    },
    server: {
        port: 3003,
    },
});
