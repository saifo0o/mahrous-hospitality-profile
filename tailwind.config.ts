
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				success: {
					DEFAULT: 'hsl(var(--success))',
					foreground: 'hsl(var(--success-foreground))'
				},
				warning: {
					DEFAULT: 'hsl(var(--warning))',
					foreground: 'hsl(var(--warning-foreground))'
				},
				info: {
					DEFAULT: 'hsl(var(--info))',
					foreground: 'hsl(var(--info-foreground))'
				},
				surface: {
					DEFAULT: 'hsl(var(--muted) / 0.3)',
					foreground: 'hsl(var(--foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				luxury: {
					parchment: '#fdfbf7',
					alabaster: '#ffffff',
					gold: '#c5a059',
					'gold-soft': '#e0c88e',
					'gold-ink': '#96682a',
					charcoal: '#2c2c2c',
					'charcoal-soft': '#4a4a4a',
					emerald: '#2e5a44',
					forest: '#1f3d2d',
					growth: '#2e7d5a',
					ivory: '#f7f5f1',
					sand: '#d9c6a3',
					copper: '#b5602f',
					navy: '#2c2c2c',
					gray: '#6e6660'
				},
				parchment: {
					DEFAULT: '#fdfbf7',
					light: '#fdfbf7',
				},
				alabaster: '#ffffff',
				gold: {
					DEFAULT: '#c5a059',
					soft: '#e0c88e',
					ink: '#96682a',
				},
				charcoal: {
					DEFAULT: '#2c2c2c',
					soft: '#4a4a4a',
				},
				emerald: {
					DEFAULT: '#2e5a44',
					deep: '#1f3d2d',
				},
				forest: '#1f3d2d',
				growth: '#2e7d5a',
				ivory: '#f7f5f1',
				sand: '#d9c6a3',
				copper: '#b5602f',
				'warm-graphite': '#6e6660',
				whatsapp: {
					DEFAULT: '#25D366',
					dark: '#128C7E'
				}
			},
			fontFamily: {
				sans: ['Inter', '-apple-system', 'sans-serif'],
				montserrat: ['Inter', '-apple-system', 'sans-serif'],
				playfair: ['Fraunces', 'Georgia', 'serif'],
				amiri: ['Amiri', 'Traditional Arabic', 'serif'],
				cairo: ['Cairo', 'system-ui', 'sans-serif'],
			},
			fontSize: {
				hero: ['4.1875rem', { lineHeight: '1.1' }],   // S6 · 67px
				's4': ['2.5625rem', { lineHeight: '1.15' }],   // S4 · 41px
				's3': ['2.0625rem', { lineHeight: '1.2' }],    // S3 · 33px
				's2': ['1.625rem', { lineHeight: '1.3' }],     // S2 · 26px
				'caption': ['0.8125rem', { lineHeight: '1.4', letterSpacing: '0.03em' }], // S-1 · 13px
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			spacing: {
				// Fibonacci step scale — golden-ratio-aligned brand spacing tokens.
				'brand-xs': '8px',
				'brand-sm': '13px',
				'brand-md': '21px',
				'brand-lg': '34px',
				'brand-xl': '55px',
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': { 
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': { 
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'slide-in': {
					'0%': { 
						transform: 'translateX(-20px)',
						opacity: '0'
					},
					'100%': { 
						transform: 'translateX(0)',
						opacity: '1'
					}
				},
				'scale-in': {
					'0%': {
						transform: 'scale(0.95)',
						opacity: '0'
					},
					'100%': {
						transform: 'scale(1)',
						opacity: '1'
					}
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0px)',
					},
					'50%': {
						transform: 'translateY(-20px)',
					},
				},
			'bounce-subtle': {
					'0%, 100%': {
						transform: 'translateY(0)',
					},
					'50%': {
						transform: 'translateY(-5px)',
					},
				},
				'marquee': {
					'0%': { transform: 'translateX(0%)' },
					'100%': { transform: 'translateX(-33.333%)' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'slide-in': 'slide-in 0.5s ease-out',
				'scale-in': 'scale-in 0.5s ease-out',
				'float': 'float 3s ease-in-out infinite',
				'bounce-subtle': 'bounce-subtle 1s ease-in-out infinite',
				'marquee': 'marquee 25s linear infinite',
			},
			boxShadow: {
				'gold-sm': '0 1px 2px 0 rgba(197, 160, 89, 0.15)',
				'gold': '0 1px 3px 0 rgba(197, 160, 89, 0.2), 0 1px 2px 0 rgba(197, 160, 89, 0.12)',
				'gold-md': '0 4px 10px -2px rgba(197, 160, 89, 0.25)',
				'gold-lg': '0 8px 20px -4px rgba(197, 160, 89, 0.28)',
				'gold-xl': '0 12px 28px -6px rgba(197, 160, 89, 0.3)',
				'gold-2xl': '0 20px 40px -10px rgba(197, 160, 89, 0.35)',
				'gold-inner': 'inset 0 2px 4px 0 rgba(197, 160, 89, 0.15)',
				'soft': '0 1px 2px rgba(44, 44, 44, 0.04), 0 8px 24px rgba(44, 44, 44, 0.06)',
				'lift': '0 4px 12px rgba(44, 44, 44, 0.08), 0 24px 60px rgba(44, 44, 44, 0.12)',
				'shadow-gold': '0 0 0 1px rgba(197, 160, 89, 0.35), 0 12px 40px rgba(197, 160, 89, 0.18)'
			},
			backdropBlur: {
				xs: '2px',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
