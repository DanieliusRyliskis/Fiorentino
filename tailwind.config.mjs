/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        fontSize: {
            sm: ['clamp(0.7rem, 0.66rem + 0.2vw, 0.9rem)', '1.3'], /* Body Small */
            base: ['clamp(0.875rem, 0.825rem + 0.25vw, 1.125rem)', '1.3'], /* Body Regular */
            lg: ['clamp(1.094rem, 1.031rem + 0.313vw, 1.406rem)', '1.3'], /* Header 6 */
            xl: ['clamp(1.367rem, 1.289rem + 0.391vw, 1.758rem)', '1.3'], /* Header 5 */
            '2xl': ['clamp(1.709rem, 1.611rem + 0.489vw, 2.197rem)', '1.3'], /* Header 4 */
            '3xl': ['clamp(2.136rem, 2.014rem + 0.611vw, 2.747rem)', '1.3'],  /* Header 3 */
            '4xl': ['clamp(2.67rem, 2.517rem + 0.763vw, 3.433rem)', '1.3'], /* Header 2 */
            '5xl': ['clamp(3.338rem, 3.147rem + 0.953vw, 4.291rem)', '1.3'], /* Header 1 */
        },
        extend: {
            colors: {
                primary: "#FFDA74",
                secondary: "#4D4637",
                accent: "#C0564A",
                header: "#632B00",
            },
        },
    },
    plugins: [],
};

