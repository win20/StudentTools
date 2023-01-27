/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#1D3557',
				secondary: '#457B9D',
				secondaryHighlight: '#5488a8',
				lightText: '#F1FAEE',
			},
			fontFamily: {
				nunito: ['nunito', 'sans-serif'],
			},
			borderWidth: {
				1: '1px',
			},
			screens: {
				tablet: '640px',
				laptop: '1024px',
				desktop: '1280px',
			},
		},
	},
	plugins: [],
};
