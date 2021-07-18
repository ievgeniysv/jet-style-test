import { render, screen } from '@testing-library/react';
import { BookCard } from './BookCard';

describe('Test BookCard Component', () => {
  test('Get author and title from props', () => {
    const setEditableBookIdHandler = jest.fn();
    render(
      <BookCard
        id={'123'}
        author={'Лев Толстой'}
        title="Война и мир"
        setEditableBookIdHandler={setEditableBookIdHandler}
      />,
    );
    expect(screen.queryByText('Война и мир')).toBeInTheDocument();
  });
});
