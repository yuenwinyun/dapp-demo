import type { Plugin } from "vite";
import { createFilter } from "@rollup/pluginutils";

interface Options {
    include?: string | RegExp | (string | RegExp)[];
    exclude?: string | RegExp | (string | RegExp)[];
    statements: {
        [identifier: string]: string;
    };
}

function getFilename(id: string) {
    return id.split(`?`, 2)[0];
}

export default (options: Options): Plugin => {
    const filter = createFilter(options.include, options.exclude);

    return {
        name: "auto-import-defineSafeFC",
        enforce: "pre",
        async transform(code, id) {
            let transformedCode = code;
            for (const [identifier, statement] of Object.entries(options.statements)) {
                if (code.includes(identifier) && filter(getFilename(id))) {
                    transformedCode = statement + "\n" + code;
                }
            }
            return { code: transformedCode };
        },
    };
};
