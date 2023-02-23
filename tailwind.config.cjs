module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		screens: {
			desktop: '1440px',
			mobile: '375px',
		},
		colors: {
			neonGreen: '#53FFAA',
			lightCyan: '#CEE3E9',
			darkGrayishBlue: '#313A48',
			grayishBlue: '#4F5D74',
			darkBlue: '#202733',
		},
		fontFamily: {
			Manrope: ['Manrope', 'sans-serif'],
		},
		fontSize: {
			xl: ['28px', { lineHeight: '38px', fontWeight: 800 }],
			l: ['24px', { lineHeight: '33px', fontWeight: 800 }],
			m: ['13px', { lineHeight: '18px', fontWeight: 800 }],
			s: ['11px', { lineHeight: '15px', fontWeight: 800 }],
		},
		extend: {
			letterSpacing: {
				wide: '0.2160725em',
			},
		},
	},
	plugins: [],
};
