/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx}'],
    theme: {
        extend: {
            colors: {
                mainWhite: '#ffffffcc',
                primaryColor: '#242531',
                secondaryColor: '#2f3040',
                mainYellow: '#cdb187',
                mainGreen: '#a0cc00',
                secondaryGreen: '#2ED573',
            },
        },
    },
    plugins: [],
};
