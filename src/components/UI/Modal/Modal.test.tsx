import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ReactDOM from 'react-dom';
import { Modal } from './Modal';

describe('Test Modal component', () => {
  test('modal shows the children and  close after cliking on backrdop', () => {
    ReactDOM.createPortal = jest.fn((element) => {
      return element as React.ReactPortal;
    });

    const handleClose = jest.fn();
    render(
      <Modal onClick={handleClose}>
        <div>test</div>
      </Modal>,
    );
    expect(screen.getByText('test')).toBeTruthy();
    userEvent.click(screen.getByTestId('backdrop'));
    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});
