import React, { useContext, useState } from 'react';
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalCloseButton,
	ModalBody,
	ModalFooter,
	FormControl,
	Input,
	Box,
	Button,
} from '@chakra-ui/react';
import ThemeContext from '../context/ThemeContext';
import LanguageContext from '../context/LanguageContext';
export default function ChakraModal({
	isOpen,
	onClose,
	addBook,
	loading,
	setLoading,
}) {
	const [form, setForm] = useState({});
	const [error, setError] = useState({});
	const { theme } = useContext(ThemeContext);
	const { texts } = useContext(LanguageContext);

	const handleInput = (e) => {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<ModalOverlay />
			<ModalContent>
				<Box className={`${theme}`}>
					<ModalHeader>{texts.modalTitle}</ModalHeader>
					<ModalCloseButton />
					<ModalBody pb={4}>
						<FormControl>
							<Input
								name="book"
								autoFocus={true}
								onChange={handleInput}
								placeholder={`${texts.modalInput}`}
							/>
						</FormControl>
					</ModalBody>
					<ModalFooter>
						<Button
							colorScheme="teal"
							mr={3}
							onClick={() => {
								setLoading(true);
								setTimeout(() => {
									if (form.book === undefined) {
										setError(true);
										window.alert(`${texts.emptyInput}`);
									} else {
										setError(false);
										addBook(form.book);
										onClose();
										setLoading(false);
									}
								}, 1500);
							}}
						>
							{error === true
								? `${texts.addBtn}`
								: loading === true
								? `${texts.loading}`
								: `${texts.addBtn}`}
						</Button>
						<Button onClick={onClose} variant={'outline'} colorScheme="teal">
							{texts.cancelModal}
						</Button>
					</ModalFooter>
				</Box>
			</ModalContent>
		</Modal>
	);
}
