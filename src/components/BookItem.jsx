import { DeleteIcon, SpinnerIcon } from '@chakra-ui/icons';
import { Box, Button, ButtonGroup, IconButton } from '@chakra-ui/react';

export default function BookItem({ book, deleteBook, loading, setLoading }) {
	const { id, title } = book;

	return (
		<Box as="li" mb={2}>
			<ButtonGroup
				size="md"
				w={'100%'}
				isAttached
				variant="outline"
				colorScheme="teal"
			>
				<Button justifyContent="flex-start" mr="-px" w={'100%'}>
					{title}
				</Button>

				<IconButton
					onClick={() => {
						setLoading(true);
						setTimeout(() => {
							deleteBook(id);
							setLoading(false);
						}, 1500);
					}}
					icon={loading === true ? <SpinnerIcon /> : <DeleteIcon />}
				/>
			</ButtonGroup>
		</Box>
	);
}
