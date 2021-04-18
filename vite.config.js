import reactRefresh from "@vitejs/plugin-react-refresh";

/** @type {import("vite").UserConfig} */
const config = {
    root: "src",
    plugins: [reactRefresh()],
    esbuild: {
        jsxInject: `import React from "react"`,
    },
};

module.exports = config;
