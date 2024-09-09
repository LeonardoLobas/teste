// tailwind.config.js
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                "playwrite-cu": ['"Playwrite CU"', "cursive"],
            },
            animation: {
                dropHeader: "dropHeader 0.8s ease-in-out forwards",
            },
            keyframes: {
                dropHeader: {
                    "0%": {
                        transform: "translateY(-100%)", // Começa fora da tela
                        opacity: "0", // Invisível no início
                    },
                    "100%": {
                        transform: "translateY(0)", // Volta à posição original
                        opacity: "1", // Fica visível
                    },
                },
            },
        },
    },
    plugins: [],
};
