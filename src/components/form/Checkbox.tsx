import { forwardRef, HTMLAttributes, InputHTMLAttributes } from 'react';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>((props) => {
  const { className } = props;

  return <input type="checkbox" />;
});

export default Checkbox;
