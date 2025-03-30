export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-black": "var(--primary-black)",
        "primary-white": "var(--primary-white)",
        "gray": "var(--gray)",
        "gray-medium": "var(--gray-medium)",
        "gray-light": "var(--gray-light)",
        "gray-dark": "var(--gray-dark)",
        "gray-disabled": "var(--gray-disabled)",
        "gray-border": "var(--gray-border)",
        "gray-border-light": "var(--gray-border-light)",
        "gray-label": "var(--gray-label)",
        "error-red": "var(--error-red)",
        "error-red-light": "var(--error-red-light)"
      },
      fontFamily: {
        "body": "var(--font-body)"
      }
    },
  },
  plugins: [],
}