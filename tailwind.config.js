/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			backgroundImage: {
				// 'login-pic': "url('./src/assets/wallpaper.png')",
				'login-pic': "url('./src/assets/wallpaper2.png')",
				
			},
		},
	},
	plugins: [],
};
