/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#007AFF',
				secondary: '#0F70DA',
				'primary-content': '#1D1D1D',
				'secondary-content': '#007AFF',
				neutral: '#FFFFFF',
			},
		},
	},
	plugins: [],
};
