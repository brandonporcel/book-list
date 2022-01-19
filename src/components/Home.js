import './home.css';
import {
	Button,
	Box,
	Heading,
	Flex,
	Spacer,
	Image,
	useDisclosure,
} from '@chakra-ui/react';
import { Header } from './Header';
import { useContext, useEffect, useReducer, useState } from 'react';
import ThemeContext from '../context/ThemeContext';
import LanguageContext from '../context/LanguageContext';
import ChakraModal from './ChakraModal';
import { toDoReducer, toDoInitialState } from '../reducers/todo.reducer';

import BookItem from './BookItem';
import { TYPES } from '../actions/todo.actions';

function Home() {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const { theme } = useContext(ThemeContext);
	const { texts } = useContext(LanguageContext);
	const [state, dispatch] = useReducer(toDoReducer, toDoInitialState);
	const { books } = state;
	const [loading, setLoading] = useState(false);

	const addBook = (book) => {
		dispatch({ type: TYPES.ADD_BOOK, payload: book });
	};
	const deleteBook = (id) => {
		dispatch({ type: TYPES.DELETE_BOOK, payload: id });
	};
	const deleteAll = () => {
		dispatch({ type: TYPES.DELETE_ALL });
	};
	useEffect(() => {
		localStorage.setItem('books', JSON.stringify(books));
	}, [books]);
	return (
		<Box
			className={`container ${theme}`}
			p={{ base: '20px 10%', md: '20px 20%', xl: '25px 35%' }}
		>
			<Header />
			<Heading size="3xl" mb={2}>
				📚
			</Heading>
			<main>
				<Heading as="h1">{texts.title}</Heading>
				<Flex mb={8}>
					<Box as="p">{books.length} items</Box>
					<Spacer />
					{books.length !== 0 && (
						<Box
							as="p"
							border="1px"
							p={'2px'}
							cursor={'pointer'}
							onClick={deleteAll}
						>
							{texts.clearBtn}
						</Box>
					)}
				</Flex>

				{books.length === 0 ? (
					<Box mb={4} align={'center'}>
						<Image
							boxSize="215px"
							width={'271px'}
							objectFit="cover"
							src="https://images.blush.design/RPKmbwsu0IJ9iT8e8Zfk?w=500&auto=compress&cs=srgb"
							alt="Library Draw"
						/>
						<Box as="p">{texts.emptyMsg}</Box>
					</Box>
				) : (
					<Box as="ul">
						{books.map((book) => {
							return (
								<BookItem
									key={book.id}
									book={book}
									deleteBook={deleteBook}
									loading={loading}
									setLoading={setLoading}
								></BookItem>
							);
						})}
					</Box>
				)}

				<Button
					position={'sticky'}
					bottom="25px"
					colorScheme={'teal'}
					w={'100%'}
					onClick={onOpen}
					size={'lg'}
				>
					{texts.addBtn}
				</Button>
				<ChakraModal
					isOpen={isOpen}
					onClose={onClose}
					addBook={addBook}
					loading={loading}
					setLoading={setLoading}
				></ChakraModal>
			</main>
		</Box>
	);
}
export default Home;
