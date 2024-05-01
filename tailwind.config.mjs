/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-logo":
                    "radial-gradient(ellipse at 40% 40%,rgba(0, 255, 179, 0.3) 10%,rgba(0, 0, 0, 0) 40%), " +
                    "radial-gradient(circle at 65% 45%,rgba(29, 233, 151, 0.3) 10%,rgba(0, 0, 0, 0) 40%), " +
                    "radial-gradient(circle at 40% 60%,rgba(24, 245, 193, 0.3) 10%,rgba(0, 0, 0, 0) 45%);",
            },
        },
    },
    plugins: [],
};
