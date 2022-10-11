/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				'primary-yellow': '#FAB632',
				'primary-yellow-light': '#ffbf42',
			},
		},
	},
	plugins: [],
};
