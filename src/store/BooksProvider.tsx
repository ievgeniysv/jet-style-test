import React, { useEffect } from 'react';
import { useReducer } from 'react';
import { initializer } from '../helpers/helpers';
import { IBook, IBooksState } from '../types/types';
import { BooksContext } from './books-context';
import { ADD, booksReducer, EDIT, REMOVE } from './reducer';

interface IProvider {
  children: React.ReactNode;
}

const defaultBooksState: IBooksState = {
  books: [],
};

export const BooksProvider = ({ children }: IProvider) => {
  const [booksState, dispatchBooksAction] = useReducer(
    booksReducer,
    defaultBooksState,
    initializer,
  );

  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(booksState));
  }, [booksState]);

  const addBookHandler = (book: IBook) => {
    dispatchBooksAction({
      type: ADD,
      book: book,
    });
  };
  const removeBookHandler = (id: string) => {
    dispatchBooksAction({
      type: REMOVE,
      id: id,
    });
  };

  const editBookHandler = (book: IBook) => {
    dispatchBooksAction({
      type: EDIT,
      book: book,
    });
  };

  const booksContext = {
    books: booksState.books,
    addBook: addBookHandler,
    removeBook: removeBookHandler,
    editBook: editBookHandler,
  };
  return (
    <BooksContext.Provider value={booksContext}>
      {children}
    </BooksContext.Provider>
  );
};
