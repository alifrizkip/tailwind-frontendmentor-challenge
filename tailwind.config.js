module.exports = {
  purge: [
    './public/**/*.html'
    // './pages/profile-card-component.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'intro-mobile': "url('/images/intro-component-with-signup/bg-intro-mobile.png')",
        'intro-desktop': "url('/images/intro-component-with-signup/bg-intro-desktop.png')",
        'apparel-pattern-desktop': "url('/images/base-apparel-coming-soon/bg-pattern-desktop.svg')"
      }),
      fontFamily: () => ({
        'poppins': "Poppins",
        'lexend-deca': "Lexend Deca",
        'big-shoulders': "Big Shoulders Display",
        'kumbh': "Kumbh Sans",
        'spartan': "Spartan",
        'josefin': "Josefin Sans",
        'manrope': "Manrope"
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
