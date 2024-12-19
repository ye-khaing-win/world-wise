import classNames from 'classnames';
import { forwardRef, InputHTMLAttributes } from 'react';

type InputVariant = 'outlined';

type InputDimension = 'default';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: InputVariant;
  className?: string;
  dimension?: InputDimension;
  fullWidth?: boolean;
  label?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    variant = 'outlined',
    dimension = 'default',
    label,
    className,
    ...rest
  } = props;

  const inputVariant: {
    [key in InputVariant]: { general: string; validation: string };
  } = {
    outlined: {
      general: classNames(
        'h-full w-full',
        'border border-grey-500/20',
        'rounded-lg',
        'group-hover:border-grey-800/80',
        'group-has-[:focus]:border-grey-800 group-has-[:focus]:border-2'
      ),
      validation: classNames(),
    },
  };

  const inputDimension: { [key in InputDimension]: string } = {
    default: classNames('py-4 px-[14px]'),
  };

  const inputVariantStyles = inputVariant[variant].general;
  const inputSizeStyles = inputDimension[dimension];

  const styles = classNames(
    'h-14',
    'bg-transparent relative z-30',
    'outline-none',
    'text-sm text-current',
    'placeholder-transparent',
    // inputVariantStyles,
    inputSizeStyles,
    className
  );

  return (
    <div>
      <input ref={ref} className={styles} {...rest} {...rest} />
      <div className={classNames(inputVariantStyles, 'absolute top-0 left-0')} />
    </div>
  );
});

export default Input;
