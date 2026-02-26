/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'deep-space': '#0A0E27',
                'dark-void': '#070A1F',
                'cyber-cyan': '#00F0FF',
                'neon-turquoise': '#00D9E8',
                'electric-blue': '#00C4FF',
                'deep-purple': '#6B46C1',
                'soft-purple': '#8B5CF6',
                'light-purple': '#A78BFA',
                'indigo-glow': '#6366F1',
                'neon-magenta': '#FF00FF',
                'neon-pink': '#FF006E',
                'gray-mist': '#94A3B8',
                'gray-dim': '#64748B',
                'success-green': '#10B981',
                'warning-yellow': '#F59E0B',
                'error-red': '#EF4444',
                'info-blue': '#3B82F6',
            },
            fontFamily: {
                heading: ['Orbitron', 'sans-serif'],
                body: ['Inter', 'sans-serif'],
                code: ['Fira Code', 'monospace'],
            },
            animation: {
                'float': 'float 3s ease-in-out infinite',
                'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
                'slide-up': 'slide-up 0.3s ease-out',
                'fade-in': 'fade-in 0.25s ease-in',
                'twinkle': 'twinkle 2s ease-in-out infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                'glow-pulse': {
                    '0%, 100%': { opacity: '1' },
                    '50%': { opacity: '0.6' },
                },
                'slide-up': {
                    'from': { transform: 'translateY(20px)', opacity: '0' },
                    'to': { transform: 'translateY(0)', opacity: '1' },
                },
                'fade-in': {
                    'from': { opacity: '0' },
                    'to': { opacity: '1' },
                },
                twinkle: {
                    '0%, 100%': { opacity: '0.3' },
                    '50%': { opacity: '1' },
                },
            },
            backgroundImage: {
                'gradient-primary': 'linear-gradient(135deg, #00F0FF 0%, #6B46C1 100%)',
                'gradient-secondary': 'linear-gradient(135deg, #8B5CF6 0%, #6366F1 100%)',
                'gradient-card': 'linear-gradient(180deg, rgba(107,70,193,0.15) 0%, transparent 100%)',
            },
            boxShadow: {
                'glow-cyan': '0 0 20px rgba(0,240,255,0.5), inset 0 0 10px rgba(0,240,255,0.2)',
                'glow-purple': '0 0 20px rgba(139,92,246,0.5), inset 0 0 10px rgba(139,92,246,0.2)',
            }
        },
    },
    plugins: [],
}
