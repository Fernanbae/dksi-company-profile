import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "darken-jungle-green": "#0B1F2A",
                "metallic-sunburst": "#AA823C",
                lotion: "#FBFBFB",
                "anti-flash-white": "#F2F2F2",
                "satin-sheen-gold": "#CA9D42",
                eggshell: "#F4EBD9",
            },
            fontFamily: {
                sans: ['"Inter"', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [],
};
