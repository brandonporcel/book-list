import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
	fontSizes: {
		lg: '18px',
	},
	colors: {
		normal: {
			100: 'red',
			900: 'blue',
		},
		/* gray: {
			100: 'green',
			900: '#1a1a1a',
		},
		brand: {
			100: '#f7fafc',
			// ...
			900: '#1a202c',
		},
		primaryBtn: {
			100: '#319795',
			200: 'green',
			900: 'red',
		}, */
	},
});
export default theme;
