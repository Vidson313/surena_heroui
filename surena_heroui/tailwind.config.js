import { heroui } from "@heroui/theme"
import typography from "@tailwindcss/typography"

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      typography: {
        invert: {
          css: {
            "--tw-prose-body": 'theme("colors.slate.400")',
            "--tw-prose-headings": 'theme("colors.white")',
            "--tw-prose-links": 'theme("colors.blue.300")',
            "--tw-prose-bold": 'theme("colors.white")',
            "--tw-prose-counters": 'theme("colors.slate.500")',
            "--tw-prose-bullets": 'theme("colors.slate.600")',
            "--tw-prose-hr": 'theme("colors.slate.800")',
            "--tw-prose-quotes": 'theme("colors.slate.200")',
            "--tw-prose-quote-borders": 'theme("colors.slate.700")',
            "--tw-prose-captions": 'theme("colors.slate.500")',
            "--tw-prose-code": 'theme("colors.blue.200")',
            "--tw-prose-pre-code": 'theme("colors.slate.200")',
            "--tw-prose-pre-bg": 'theme("colors.slate.900")',
            "--tw-prose-th-borders": 'theme("colors.slate.700")',
            "--tw-prose-td-borders": 'theme("colors.slate.800")',
          },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [heroui(), typography],
}

module.exports = config;
