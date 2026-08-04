
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
					parchment: '#F5F2EA',
					alabaster: '#FFFFFF',
					gold: '#B5502B',
					charcoal: '#14171A',
					emerald: '#1E3630',
					// Back-compat alias: legacy code referenced luxury-navy as the "dark structural" color.
					navy: '#14171A',
					gray: '#6B655C'
				},
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
				'gold-sm': '0 1px 2px 0 rgba(181, 80, 43, 0.1)',
				'gold': '0 1px 3px 0 rgba(181, 80, 43, 0.14), 0 1px 2px 0 rgba(181, 80, 43, 0.1)',
				'gold-md': '0 4px 10px -2px rgba(181, 80, 43, 0.18)',
				'gold-lg': '0 8px 20px -4px rgba(181, 80, 43, 0.2)',
				'gold-xl': '0 12px 28px -6px rgba(181, 80, 43, 0.22)',
				'gold-2xl': '0 20px 40px -10px rgba(181, 80, 43, 0.24)',
				'gold-inner': 'inset 0 2px 4px 0 rgba(181, 80, 43, 0.1)'
			},
			backdropBlur: {
				xs: '2px',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
