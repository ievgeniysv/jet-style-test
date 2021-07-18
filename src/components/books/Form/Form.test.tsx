import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ReactDOM from 'react-dom';
import { Form } from './Form';

describe('Test Form Component', () => {
  beforeEach(() => {
    ReactDOM.createPortal = jest.fn((element, node) => {
      return element as React.ReactPortal;
    });
  });

  it('Testing Author input', () => {
    render(<Form onHideForm={() => {}} />);
    const input = screen.getByLabelText('Имя Автора');
    userEvent.type(input, 'Лев Тостой');
    expect(input).toHaveValue('Лев Тостой');
  });

  it('Change modal title by props', () => {
    render(<Form onHideForm={() => {}} bookId="123" />);
    expect(screen.getByText('Редактирование книги')).toBeInTheDocument();
  });
});
