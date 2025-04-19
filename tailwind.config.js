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
        "gray-medium-light": "var(--gray-medium-light)",
        "gray-light": "var(--gray-light)",
        "gray-dark": "var(--gray-dark)",
        "gray-disabled": "var(--gray-disabled)",
        "gray-border": "var(--gray-border)",
        "gray-border-light": "var(--gray-border-light)",
        "gray-label": "var(--gray-label)",
        "gray-blurred": "var(--gray-blurred)",
        "gray-blurred-dark": "var(--gray-blurred-dark)",
        "error-red": "var(--error-red)",
        "error-red-light": "var(--error-red-light)"
      },
      fontFamily: {
        "body": "var(--font-body)"
      },
      backdropBlur: {
        xs: '4px', // Define your own tiny blur
      },
    },
  },
  plugins: [],
  future: {
    hoverOnlyWhenSupported: true,
  }
}