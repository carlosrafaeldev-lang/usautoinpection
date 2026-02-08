/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html"],
    theme: {
        extend: {
            colors: {
                primary: '#A51A1E',
                secondary: '#CBC6BF',
                dark: '#2E3436',
                darker: '#1A1D1E',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
