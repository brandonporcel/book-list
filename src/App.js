import Home from './components/Home';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './components/extendTheme';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
function App() {
	return (
		<ThemeProvider>
			<LanguageProvider>
				<ChakraProvider theme={theme}>
					<Home />
				</ChakraProvider>
			</LanguageProvider>
		</ThemeProvider>
	);
}

export default App;
