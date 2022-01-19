import { useContext } from 'react';
import { Box, Center, Spacer } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

import ThemeContext from '../context/ThemeContext';
import LanguageContext from '../context/LanguageContext';
export const Header = () => {
	const { theme, handleTheme } = useContext(ThemeContext);
	const { texts, handleLanguage } = useContext(LanguageContext);

	return (
		<Center align={'right'}>
			<Spacer></Spacer>
			<Box
				onClick={handleLanguage}
				as="span"
				color="gray.600"
				cursor={'pointer'}
				fontSize={24}
			>
				{texts.language}
			</Box>

			{theme === 'dark' ? (
				<Box
					display={'inline'}
					color="gray.600"
					data-theme="light"
					cursor={'pointer'}
					ml={2}
					onClick={handleTheme}
				>
					<SunIcon w={8} h={8} />{' '}
				</Box>
			) : (
				<Box
					display={'inline'}
					color="gray.600"
					data-theme="dark"
					cursor={'pointer'}
					ml={2}
					onClick={handleTheme}
				>
					<MoonIcon w={8} h={8} />
				</Box>
			)}
		</Center>
	);
};
