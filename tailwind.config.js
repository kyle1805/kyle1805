/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "primary-radient": `linear-gradient(
          86.88deg,
          #20e3b2 1.38%,
          #ffb86c 64.35%,
          #2cccff 119.91%
        )`,
        "secondary-radient": `linear-gradient(
          86.88deg,
          #7d6aff 1.38%,
          #ffb86c 64.35%,
          #fc2872 119.91%
        )
        `,
      },
    },
  },
  plugins: [],
};
