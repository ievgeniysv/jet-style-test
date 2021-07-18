import { render, screen } from '@testing-library/react';
import { BooksContext, IBooksContext } from '../../../store/books-context';
import { BookList } from './BookList';

describe('Test BookList Component', () => {
  const propsFunctions = {
    addBook: jest.fn(),
    removeBook: jest.fn(),
    editBook: jest.fn(),
  };

  test("Modal doesn't renders by default", () => {
    render(<BookList />);

    expect(screen.queryByText('Редактирование книги')).not.toBeInTheDocument();
  });

  test('If books arr is empty, show text stub', () => {
    const emptyProviderProps: IBooksContext = {
      books: [],
      ...propsFunctions,
    };

    render(
      <BooksContext.Provider value={emptyProviderProps}>
        <BookList />
      </BooksContext.Provider>,
    );
    expect(screen.getByText('Нет добавленных книг')).toBeInTheDocument();
  });

  test('If we have books in context, remove text stub', () => {
    const providerProps: IBooksContext = {
      books: [{ id: '123', author: 'Лев Толстой', title: 'Война и мир' }],
      ...propsFunctions,
    };
    render(
      <BooksContext.Provider value={providerProps}>
        <BookList />
      </BooksContext.Provider>,
    );
    expect(screen.queryByText('Нет добавленных книг')).not.toBeInTheDocument();
  });
});
