const config = require("@pluv-example/tailwind-config");

/** @type {import("tailwindcss").Config} */
module.exports = {
    ...config,
    content: [
        "./src/app/**/*.{js,jsx,ts,tsx}",
        "./src/components/**/*.{js,jsx,ts,tsx}",
        "./src/pages/**/*.{js,jsx,ts,tsx}",
    ],
};
