import classNames from 'classnames';
import { forwardRef, InputHTMLAttributes } from 'react';

type InputVariant = 'solid';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant: InputVariant;
  className?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { variant, className } = props;

  const inputVariants: {
    [key in InputVariant]: { general: string; validation: string };
  } = { solid: { general: classNames(), validation: classNames() } };

  return <input ref={ref} />;
});

export default Input;
