import type { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'

const config = {
    darkMode: ['class'],
    content: [
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './app/**/*.{ts,tsx}',
        './src/**/*.{ts,tsx}',
    ],
    prefix: '',
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px',
            },
        },
        extend: {
            fontFamily: {
                sans: ['var(--font-sans)', ...fontFamily.sans],
            },
            colors: {
                border: 'rgb(var(--border))',
                input: 'rgb(var(--input))',
                ring: 'rgb(var(--ring))',
                background: 'rgb(var(--background))',
                foreground: 'rgb(var(--foreground))',
                primary: {
                    DEFAULT: 'rgb(var(--primary))',
                    foreground: 'rgb(var(--primary-foreground))',
                },
                secondary: {
                    DEFAULT: 'rgb(var(--secondary))',
                    foreground: 'rgb(var(--secondary-foreground))',
                },
                destructive: {
                    DEFAULT: 'rgb(var(--destructive))',
                    foreground: 'rgb(var(--destructive-foreground))',
                },
                muted: {
                    DEFAULT: 'rgb(var(--muted))',
                    foreground: 'rgb(var(--muted-foreground))',
                },
                accent: {
                    DEFAULT: 'rgb(var(--accent))',
                    foreground: 'rgb(var(--accent-foreground))',
                },
                popover: {
                    DEFAULT: 'rgb(var(--popover))',
                    foreground: 'rgb(var(--popover-foreground))',
                },
                card: {
                    DEFAULT: 'rgb(var(--card))',
                    foreground: 'rgb(var(--card-foreground))',
                },
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
            },
            keyframes: {
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' },
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' },
                },
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
            },
        },
        colors: {
            purple: {
                100: '#D9D9F7',
                200: '#C0BEF2',
                300: '#A9A3EE',
                400: '#8069E9',
                500: '#6F4CE8',
                600: '#602DE7',
                700: '#5325CD',
                800: '#461DB2',
                900: '#391697',
                999: '#2D107A',
            },
            lemon: {
                100: '#F0FFA8',
                200: '#E5FF7E',
                300: '#D7FF5E',
                400: '#C7F743',
                500: '#B5E62D',
                600: '#7CCC25',
                700: '#4BB11D',
                800: '#239616',
                900: '#107A1C',
            },
            gray: {
                100: '#E2E2EB',
                200: '#CBCBD6',
                300: '#B5B5C2',
                400: '#9F9FAD',
                500: '#8A8A99',
                600: '#757585',
                700: '#616170',
                800: '#4E4E5C',
                900: '#3C3C47',
            },
            black: {
                100: '#F4F4F6',
                200: '#DFDEE3',
                300: '#CAC8D0',
                400: '#A09CAB',
                500: '#767084',
                600: '#4F4B58',
                700: '#3B3842',
                800: '#27252C',
                900: '#1B1A1F',
                950: '#131316',
            },
            success: '#4CE876',
            info: '#4C6BE8',
            warning: '#E8974C',
            error: '#E84C4C',
            white: '#FAFAFF',
        },
    },
    plugins: [require('tailwindcss-animate')],
} satisfies Config

export default config
