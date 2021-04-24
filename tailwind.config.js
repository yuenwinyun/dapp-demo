const colors = require("tailwindcss/colors");

module.exports = {
    purge: false,
    darkMode: "media", // or 'media' or 'class'
    theme: {
        fontFamily: {
            // caption uses the systemfont so it looks more native
            display: ["caption"],
            body: ["caption"],
        },
        extend: {
            colors: {
                transparent: "transparent",
                currentColor: "currentColor",
                violet: colors.violet,
            },
        },
    },
    variants: {
        outline: ["focus", "hover"],
        border: ["focus", "hover"],
        extends: {
            backgroundColor: ["active"],
        },
    },
    plugins: [],
};
