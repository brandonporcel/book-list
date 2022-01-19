import { createContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

const initialTheme = JSON.parse(localStorage.getItem('theme')) || 'dark';

const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState(initialTheme);

	const handleTheme = (e) => {
		document.querySelectorAll("[data-foo='1']");

		if (
			e.target.matches("[data-theme='light']") ||
			e.target.matches("[data-theme='light'] *")
		) {
			setTheme('light');
		} else {
			setTheme('dark');
		}
	};
	useEffect(() => {
		localStorage.setItem('theme', JSON.stringify(theme));
	}, [theme]);
	const data = { theme, handleTheme };
	return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};
export { ThemeProvider };
export default ThemeContext;
