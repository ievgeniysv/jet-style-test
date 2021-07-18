import ReactDOM from 'react-dom';
import classes from './Modal.module.css';

interface IBackDrop {
  onClick: () => void;
}

interface IModalOverlay {
  children: React.ReactNode;
}

interface IModal {
  children: React.ReactNode;
  onClick: () => void;
}

const Backdrop = ({ onClick }: IBackDrop) => {
  return <div data-testid="backdrop" onClick={onClick} className={classes.backdrop}></div>;
};

const ModalOverlay = ({ children }: IModalOverlay) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{children}</div>
    </div>
  );
};

const portalElement = document.getElementById('overlays') as HTMLDivElement;

export const Modal = ({ onClick, children }: IModal) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClick={onClick} />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        portalElement,
      )}
    </>
  );
};
