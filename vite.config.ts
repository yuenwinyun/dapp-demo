import { resolve } from "path";
import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import twstyled from "vite-plugin-twstyled";
import { uwin } from "vite-plugin-uwin";

export default defineConfig({
    build: {
        outDir: resolve("./dist"),
        emptyOutDir: true,
        sourcemap: true,
        minify: "esbuild",
    },
    root: resolve(__dirname, "./src/client"),
    publicDir: resolve(__dirname, "public"),
    plugins: [
        twstyled(),
        reactRefresh(),
        uwin({
            exclude: /.*defineSafeFC.ts/g,
            autoImportStatements: {
                defineSafeFC: 'import { defineSafeFC } from "@/utils/defineSafeFC";',
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
