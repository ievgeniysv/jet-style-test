import classes from './Header.module.css';

export const Header = () => {
  return (
    <header className={classes.header}>
      <h1 className={classes.header__title}>Список книг</h1>
    </header>
  );
};
