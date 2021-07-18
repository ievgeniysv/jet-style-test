import { useContext, useState } from 'react';
import { BooksContext } from '../../../store/books-context';
import { BookCard } from '../BookCard/BookCard';
import { Form } from '../Form/Form';
import classes from './BookList.module.css';

export const BookList = () => {
  const { books } = useContext(BooksContext);
  const [editableBookId, setEditableBookId] = useState('');

  const setEditableBookIdHandler = (id: string) => {
    setEditableBookId(id);
  };

  const resetEditableBookId = () => {
    setEditableBookId('');
  };

  const bookCardsList = books.map(({ author, title, id, cover }) => (
    <BookCard
      key={id}
      id={id}
      author={author}
      title={title}
      cover={cover}
      setEditableBookIdHandler={setEditableBookIdHandler}
    />
  ));
  return (
    <>
      {books.length ? (
        <ul className={classes['book-list']}> {bookCardsList} </ul>
      ) : (
        <h2 className={classes['no-books']}>Нет добавленных книг</h2>
      )}
      {editableBookId && (
        <Form onHideForm={resetEditableBookId} bookId={editableBookId} />
      )}
    </>
  );
};
