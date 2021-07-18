import classes from './Main.module.css';

interface IMainProps {
  children: React.ReactNode;
}
export const Main = (props: IMainProps) => {
  return <main className={classes.main}>{props.children}</main>;
};
