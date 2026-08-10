export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        teal: {
          DEFAULT: "#0F766E",
          hover: "#0B5D56",
          light: "#14B8A6",
          tint: "#F0FDFA",
        },
        orange: {
          DEFAULT: "#EA580C",
          hover: "#C2410C",
        },
        surface: "#F8FAFA",
        border: "#E6ECEA",
        ink: {
          DEFAULT: "#1F2937",
          soft: "#64748B",
        },
      },
      fontFamily: {
        serif: ["Fraunces", "serif"],
        sans: ["Inter", "sans-serif"],
      },
      maxWidth: {
        content: "1120px",
      },
      borderRadius: {
        card: "16px",
      },
    },
  },
  plugins: [],
};
