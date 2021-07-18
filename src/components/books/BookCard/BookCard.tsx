import { useContext } from 'react';
import { BooksContext } from '../../../store/books-context';
import classes from './BookCard.module.css';

interface IBookCard {
  id: string;
  author: string;
  title: string;
  cover?: string;
  setEditableBookIdHandler: (id: string) => void;
}

export const BookCard = ({
  id,
  author,
  title,
  cover,
  setEditableBookIdHandler,
}: IBookCard) => {
  const { removeBook } = useContext(BooksContext);

  const removehandler = (id: string) => () => {
    removeBook(id);
  };

  const editHandler = (id: string) => () => {
    setEditableBookIdHandler(id);
  };

  return (
    <li className={classes['book-card-item']}>
      <img
        className={classes['book-img']}
        src={cover || 'http://placehold.it/145x205&text=No+cover'}
        alt={title}
      />
      <div className={classes['book-title']}>
        <span>{title}</span>
      </div>
      <div className={classes.author}>
        <span>{author}</span>
      </div>
      <button
        className={`${classes.edit} ${classes['actions-buttons']}`}
        onClick={editHandler(id)}
      />
      <button
        className={`${classes.remove} ${classes['actions-buttons']}`}
        onClick={removehandler(id)}
      />
    </li>
  );
};
