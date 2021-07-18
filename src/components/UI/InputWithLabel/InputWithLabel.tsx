import { ChangeEventHandler } from 'react';
import classes from './InputWithLabel.module.css';

interface IInputWithLabelProps {
  label: string;
  id: string;
  type: string;
  value: string | number | readonly string[] | undefined;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export const InputWithLabel = ({
  label,
  id,
  type,
  value,
  onChange,
}: IInputWithLabelProps) => {
  const isFileType = type === 'file';
  return (
    <>
      {isFileType && value && (
        <img src={value as string} alt={label} className={classes.img} />
      )}
      <div className={classes['input-wrapper']}>
        <label htmlFor={id}>{label}</label>
        <input
          id={id}
          type={type}
          value={isFileType ? undefined : value}
          onChange={onChange}
        />
      </div>
    </>
  );
};
