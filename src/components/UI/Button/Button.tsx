import classes from './Button.module.css';

interface IButton {
  onClick?: () => void;
  title: string;
  styles?: React.CSSProperties;
}

export const Button = ({ onClick, title, styles }: IButton) => {
  return (
    <button style={styles} onClick={onClick} className={classes['add-button']}>
      {title}
    </button>
  );
};
