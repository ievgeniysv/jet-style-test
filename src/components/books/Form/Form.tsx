import { Button } from '../../UI/Button/Button';
import { Modal } from '../../UI/Modal/Modal';
import classes from './Form.module.css';
import { ChangeEvent, FormEvent, useContext, useEffect, useState } from 'react';
import { getBase64 } from '../../../helpers/helpers';
import { BooksContext } from '../../../store/books-context';
import { InputWithLabel } from '../../UI/InputWithLabel/InputWithLabel';

interface IForm {
  onHideForm: () => void;
  bookId?: string;
}

export const Form = ({ onHideForm, bookId }: IForm) => {
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const [cover, setCover] = useState<string | undefined>('');
  const [formInvalid, setFormIsValid] = useState(false);

  const { addBook, editBook, books } = useContext(BooksContext);

  useEffect(() => {
    if (bookId) {
      const editableBook = books.find(({ id }) => id === bookId);
      if (editableBook) {
        setAuthor(editableBook.author);
        setTitle(editableBook.title);
        setCover(editableBook.cover);
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onChangeAuthorHandler = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setAuthor(target.value);
  };

  const onChangeTitleHandler = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setTitle(target.value);
  };

  const imageUpload = ({ target }: ChangeEvent<HTMLInputElement>) => {
    if (target.files) {
      const file = target.files[0];
      getBase64(file)
        .then((base64) => {
          setCover(base64);
        })
        .catch(() => {
          setCover('');
        });
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!author || !title) {
      setFormIsValid(true);
    } else {
      if (bookId) {
        editBook({
          id: bookId,
          author,
          title,
          cover,
        });
      } else {
        const id = Date.now().toString();
        addBook({
          id,
          author,
          title,
          cover,
        });
      }
      onHideForm();
    }
  };

  return (
    <Modal onClick={onHideForm}>
      <>
        <h2 className={classes['modal-title']}>
          {bookId ? '???????????????????????????? ??????????' : '???????????????????? ??????????'}
        </h2>
        <form className={classes.form} onSubmit={handleSubmit}>
          <InputWithLabel
            id="author"
            type="text"
            value={author}
            label="?????? ????????????"
            onChange={onChangeAuthorHandler}
          />
          <InputWithLabel
            id="book-title"
            type="text"
            value={title}
            label="???????????????? ??????????"
            onChange={onChangeTitleHandler}
          />

          <InputWithLabel
            id="cover"
            type="file"
            value={cover}
            label="??????????????"
            onChange={imageUpload}
          />
          {formInvalid && (
            <p className={classes.error}>
              ???????? "?????? ????????????" ?? "???????????????? ?????????? ???????????? ???????? ??????????????????"
            </p>
          )}
          <div className={classes.actions}>
            <Button title={bookId ? '??????????????????????????' : '????????????????'} />
            <Button
              onClick={onHideForm}
              title={'????????????'}
              styles={{ background: 'linear-gradient(#afafaf, #d1d1d1)' }}
            />
          </div>
        </form>
      </>
    </Modal>
  );
};
