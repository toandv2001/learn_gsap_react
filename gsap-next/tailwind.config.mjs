/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [addVariablesForColors],
};

function addVariablesForColors({ addBase, theme }) {
  const allColors = theme("colors"); // Lấy toàn bộ màu sắc từ theme
  const newVars = Object.entries(allColors).reduce((vars, [colorKey, colorValue]) => {
    if (typeof colorValue === "string") {
      vars[`--${colorKey}`] = colorValue; // Màu sắc cơ bản
    } else if (typeof colorValue === "object") {
      // Với các màu có sắc độ (shade)
      Object.entries(colorValue).forEach(([shade, value]) => {
        vars[`--${colorKey}-${shade}`] = value;
      });
    }
    return vars;
  }, {});

  addBase({
    ":root": newVars, // Gán biến màu vào :root
  });
}
