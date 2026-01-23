import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    red: '#DB0011',
                    blue: '#3B82F6',
                    green: '#10B981',
                    purple: '#8B5CF6',
                    amber: '#F59E0B',
                },
                dark: {
                    bg: '#0F172A',
                    card: '#1E293B',
                },
            },
            fontFamily: {
                sans: ['-apple-system', 'BlinkMacSystemFont', 'SF Pro Display', 'SF Pro Text', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
            },
        },
    },
    plugins: [],
};

export default config;
