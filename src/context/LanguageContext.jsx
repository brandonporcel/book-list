import { createContext, useEffect, useState } from 'react';
const LanguageContext = createContext();
const initialLanguage = JSON.parse(localStorage.getItem('language')) || 'ES';
const dictionary = {
	ES: {
		language: 'EN',
		title: 'Lista de Libreria',
		clearBtn: 'Limpiar lista',
		emptyMsg: 'No agregaste ningun libro🥺',
		modalTitle: 'Agregar uno nuevo',
		modalInput: 'Nombre',
		cancelModal: 'Cancelar',
		addBtn: 'Guardar',
		loading: 'Cargando',
	},
	EN: {
		language: 'ES',
		title: 'Library list',
		clearBtn: 'Clean list',
		emptyMsg: "You didn't add any book🥺",
		modalTitle: 'Add new one',
		modalInput: 'Name',
		cancelModal: 'Cancel',
		addBtn: 'Save',
		loading: 'Loading',
	},
};
const LanguageProvider = ({ children }) => {
	const [language, setLanguage] = useState(initialLanguage);
	const [texts, setTexts] = useState(dictionary[language]);

	const handleLanguage = (e) => {
		if (e.target.textContent === 'ES') {
			setTexts(dictionary['ES']);
			setLanguage('ES');
		} else {
			setTexts(dictionary['EN']);
			setLanguage('EN');
		}
	};
	const data = { texts, handleLanguage };
	useEffect(() => {
		localStorage.setItem('language', JSON.stringify(language));
	}, [language]);
	return (
		<LanguageContext.Provider value={data}>{children}</LanguageContext.Provider>
	);
};

export { LanguageProvider };
export default LanguageContext;
