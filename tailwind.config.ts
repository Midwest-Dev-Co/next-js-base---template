import type { Config } from 'tailwindcss';

import plugin from 'tailwindcss/plugin';
import { fontFamily } from 'tailwindcss/defaultTheme';

const config: Config = {
  content: [
    './src/pages/**/*.{ts,tsx,mdx}',
    './src/components/**/*.{ts,tsx,mdx}',
    './src/app/**/*.{ts,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', ...fontFamily.sans],
        serif: ['var(--font-baskervville)', ...fontFamily.serif],
        display: ['var(--font-lexend)', { fontFeatureSettings: '"ss01"' }],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwindcss-animate'),
    require('@tailwindcss/typography'),
    plugin(({ addVariant }) => addVariant('hocus', ['&:hover', '&:focus'])),
    plugin(({ addVariant }) => addVariant('around', ['&:before', '&:after'])),
  ],
};
export default config;
