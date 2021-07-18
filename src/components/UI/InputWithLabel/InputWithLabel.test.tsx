import { render, screen } from '@testing-library/react';
import { InputWithLabel } from './InputWithLabel';

describe('Test InputWithLabel Component', () => {
  test('Change value and by props', () => {
    const onChange = jest.fn();
    const inputProps = {
      value: 'Hello',
      id: 'hello',
      type: 'text',
      label: 'hello',
      onChange: onChange,
    };

    render(<InputWithLabel {...inputProps} />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveValue(inputProps.value);
  });
});
