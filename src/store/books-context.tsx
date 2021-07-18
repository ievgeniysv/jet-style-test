import React from 'react';
import { IBook } from '../types/types';

export interface IBooksContext {
  books: IBook[];
  addBook: (book: IBook) => void;
  removeBook: (id: string) => void;
  editBook: (book: IBook) => void;
}

export const BooksContext = React.createContext<IBooksContext>({
  books: [],
  addBook: (book) => {},
  removeBook: (id) => {},
  editBook: (book) => {},
});
