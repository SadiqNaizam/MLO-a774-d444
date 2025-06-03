import type { Config } from "tailwindcss";
import defaultTheme from 'tailwindcss/defaultTheme';

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
				border: 'var(--border)',
				input: 'var(--input)',
				ring: 'var(--ring)',
				background: 'var(--background)',
				foreground: 'var(--foreground)',
				primary: {
					DEFAULT: 'var(--primary)',
					foreground: 'var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'var(--secondary)',
					foreground: 'var(--secondary-foreground)'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'var(--muted)',
					foreground: 'var(--muted-foreground)'
				},
				accent: {
					DEFAULT: 'var(--accent)',
					foreground: 'var(--accent-foreground)'
				},
				popover: {
					DEFAULT: 'var(--popover)',
					foreground: 'var(--popover-foreground)'
				},
				card: {
					DEFAULT: 'var(--card)',
					foreground: 'var(--card-foreground)'
				},
        // PRD specific colors
        'prd-sidebar-bg': 'var(--prd-sidebar-bg)',
        'prd-primary-text': 'var(--foreground)', // Mapped from primaryText
        'prd-secondary-text': 'var(--muted-foreground)', // Mapped from secondaryText
        'prd-accent-blue': 'var(--primary)', // Mapped from accentBlue
        'prd-accent-gray': 'var(--secondary)', // Mapped from accentGray
        'prd-border': 'var(--border)' // Mapped from border
			},
			borderRadius: {
        // Based on PRD default 'rounded-md' (0.375rem) which is assigned to --radius
				lg: 'var(--radius)', // 0.375rem (Tailwind 'md')
				md: 'calc(var(--radius) - 2px)', // approx. 0.25rem (Tailwind 'sm')
				sm: 'calc(var(--radius) - 4px)', // approx. 0.125rem (Tailwind 'xs')
        // 'default' will use Tailwind's default, or components can use 'rounded-lg' for PRD's default
        // PRD's 'buttons: rounded-full' uses the existing 'rounded-full' utility class.
			},
      fontFamily: {
        sans: ['var(--font-primary)', ...defaultTheme.fontFamily.sans],
      },
      // PRD 'effects.shadows.default: shadow-sm' uses the existing 'shadow-sm' utility class.
      // No extension needed for boxShadow unless a new default is desired for the 'shadow' class itself.
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
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
