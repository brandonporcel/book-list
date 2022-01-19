import { TYPES } from '../actions/todo.actions';

const newInitializerBecauseLSAndIGetTired = {
	books: [],
};
export const toDoInitialState = {
	books: JSON.parse(localStorage.getItem('books')) || [],
};

export function toDoReducer(state, action) {
	switch (action.type) {
		case TYPES.ADD_BOOK: {
			let bookName = action.payload;
			if (action.payload === undefined) {
				return { ...state };
			} else {
				return {
					...state,
					books: [
						...state.books,
						{ id: Date.now(), title: bookName },
					].reverse(),
				};
			}
		}

		case TYPES.DELETE_BOOK:
			const booksFilter = state.books.filter(
				(book) => book.id !== action.payload
			);
			return { ...state, books: booksFilter };

		case TYPES.DELETE_ALL:
			return newInitializerBecauseLSAndIGetTired;

		default:
			return state;
	}
}
