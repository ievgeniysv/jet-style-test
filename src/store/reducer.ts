import { IBook, IBooksState } from '../types/types';

export const ADD = 'ADD';
export const EDIT = 'EDIT';
export const REMOVE = 'REMOVE';

type Action =
  | { type: 'ADD'; book: IBook }
  | { type: 'EDIT'; book: IBook }
  | { type: 'REMOVE'; id: string };

export const booksReducer = (state: IBooksState, action: Action) => {
  switch (action.type) {
    case ADD:
      return {
        books: [...state.books, action.book],
      };

    case REMOVE:
      const filteredBooks = state.books.filter(({ id }) => id !== action.id);
      return {
        books: filteredBooks,
      };
    case EDIT:
      const editableBookIndex = state.books.findIndex(
        ({ id }) => id === action.book.id,
      );
      const newBooks = [...state.books];
      newBooks[editableBookIndex] = action.book;
      return {
        books: newBooks,
      };
    default:
      return state;
  }
};
