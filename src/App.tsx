import { useState } from 'react';
import { BookList } from './components/books/BookList/BookList';
import { Form } from './components/books/Form/Form';
import { Header } from './components/layout/Header/Header';
import { Main } from './components/layout/Main/Main';
import { Button } from './components/UI/AddBookButton/Button';

function App() {
  const [formIsShown, setFormIsShown] = useState(false);

  const showFormHandler = () => {
    setFormIsShown(true);
  };

  const hideFormHandler = () => {
    setFormIsShown(false);
  };

  return (
    <>
      <Header />
      <Main>
        <Button onClick={showFormHandler} title="Добавить книгу" />
        <BookList />
      </Main>
      {formIsShown && <Form onHideForm={hideFormHandler} />}
    </>
  );
}

export default App;
