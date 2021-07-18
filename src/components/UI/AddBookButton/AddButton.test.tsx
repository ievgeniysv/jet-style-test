import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Test AddButton Component', () => {
  test('Change button name by props', () => {
    const { rerender } = render(<Button title="Добавить книгу" />);

    expect(screen.getByText('Добавить книгу')).toBeInTheDocument();

    rerender(<Button title="Редактировать" />);
    expect(screen.getByText('Редактировать')).toBeInTheDocument();
  });
});
