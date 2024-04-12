module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-morph': 'linear-gradient(to right, #f6d365 0%, #fda085 100%)',
        'gradient-morph-pink-red-white': 'linear-gradient(to right, #ff7e5f 0%, #feb47b 50%, #ffffff 100%)',
      },
      
      keyframes: {
        glowing: {
          '0%, 100%': {
            borderColor: '#f6d365',
            boxShadow: '0 0 10px #f6d365',
          },
          '50%': {
            borderColor: '#fda085',
            boxShadow: '0 0 20px #fda085',
          },
        },
      },
      animation: {
        glowing: 'glowing 2s linear infinite',
      },
    },
  },
  plugins: [],
};
