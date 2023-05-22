/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                montserrat: ["Montserrat", "sans-serif"],
            },
            colors: {
                primary: colors.blue,
            },
            aspectRatio: {
                "photo": "3 / 4",
            },
            gridTemplateRows: {
                '[auto,auto,1fr]': 'auto auto 1fr',
            },
        },
    },
    plugins: [require("@tailwindcss/forms"), require('@tailwindcss/aspect-ratio'),],
};
