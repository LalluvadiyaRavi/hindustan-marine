/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        marine: {
          950: '#060E1A',
          900: '#0B192C',
          850: '#112239',
          800: '#172C47',
          700: '#1E3A5F',
          600: '#2C4C70',
          500: '#3D6188',
          100: '#E4ECF4',
          50: '#F0F5FA',
        },
        surface: {
          warm: '#F8F7F4',
          soft: '#EEF1F3',
          card: '#FFFFFF',
          border: '#E2E6E9',
          borderHover: '#CBD3D8',
        },
        charcoal: {
          900: '#111827',
          800: '#1F2937',
          700: '#374151',
          600: '#4B5563',
          500: '#6B7280',
          400: '#9CA3AF',
        },
        accent: {
          orange: '#E65C00',
          orangeHover: '#CC5200',
          orangeLight: '#FFF4ED',
          whatsapp: '#25D366',
          whatsappHover: '#20BD5A',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        heading: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        'subtle': '0 1px 2px 0 rgba(0, 0, 0, 0.04)',
        'elevated': '0 4px 12px 0 rgba(11, 25, 44, 0.05)',
        'elevated-hover': '0 8px 24px -2px rgba(11, 25, 44, 0.08)',
      }
    },
  },
  plugins: [],
}
