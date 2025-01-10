/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        screens: {
            sm: '640px',
            md: '768px',
            lg: '976px',
            xl: '1440px',
        },
        extend: {
            colors: {
                brightColor: "#F4511F",
                backgroundColor: "#b7bca9",
                lightText: "#959595",
            },
        },
    },
    plugins: [],
}

