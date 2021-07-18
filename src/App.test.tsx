import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ReactDOM from 'react-dom';
import App from './App';

describe('Test App Component', () => {
  test("Modal doesn't renders by default", () => {
    render(<App />);
    expect(screen.queryByText('Добавление книги')).not.toBeInTheDocument();
  });

  test('Open modal', () => {
    ReactDOM.createPortal = jest.fn((element) => {
      return element as React.ReactPortal;
    });

    render(<App />);
    userEvent.click(screen.getByText('Добавить книгу'));
    expect(screen.getByText('Добавление книги')).toBeInTheDocument();
  });
});
