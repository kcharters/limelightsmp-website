const { iconsPlugin, getIconCollections } = require("@egoist/tailwindcss-icons")
module.exports = {
  content: [
    './resources/**/*.antlers.html',
    './resources/**/*.blade.php',
    './content/**/*.md'
  ],
  theme: {
    extend: {
        colors: {
            'black': '#12151E',
            'hot-pink': '#fd2d78'
        },
        fontFamily: {
            display: "var(--font-display)",
            body: "var(--font-body)",
        }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    iconsPlugin({
      collections: getIconCollections("all")
    })
  ],
  important: true
}
