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
			backgroundImage: {
				'header-bg': "url('./assists/about_shap_bg.png')",
				footer: "url('./assists/logo4.png')",
			},
			backgroundSize: {
				80: '20rem',
			},
		},
	},
	plugins: [],
};
