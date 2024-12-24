import classNames from 'classnames';
import { forwardRef, InputHTMLAttributes } from 'react';

type InputVariant = 'outlined';

type InputDimension = 'default';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: InputVariant;
  className?: string;
  dimension?: InputDimension;
  fullWidth?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    variant = 'outlined',
    dimension = 'default',
    fullWidth = true,
    className,
    ...rest
  } = props;

  const inputVariant: {
    [key in InputVariant]: { general: string; validation: string };
  } = {
    outlined: {
      general: classNames(
        'outline outline-1 outline-grey-500/20',
        'group-focus-within/field-wrap:outline-2 group-focus-within/field-wrap:outline-grey-800'
      ),
      validation: classNames(),
    },
  };

  const inputDimension: { [key in InputDimension]: string } = {
    default: classNames('h-14', 'py-4 px-[14px]', 'text-sm'),
  };

  const inputVariantStyles = inputVariant[variant].general;
  const inputDimensionStyles = inputDimension[dimension];

  const styles = classNames(
    'border-none',
    'rounded-lg',
    'text-grey-800',
    'text-ellipsis',
    {
      'w-full': fullWidth,
    },
    inputVariantStyles,
    inputDimensionStyles,
    className
  );

  return <input ref={ref} className={styles} {...rest} {...rest} />;
});

export default Input;
