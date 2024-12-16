import classNames from 'classnames';
import { cloneElement, forwardRef, HTMLAttributes, ReactElement, ReactNode } from 'react';
import Iconify from '../Iconify';

const BUTTON_COLORS = {
  default: {
    bg: {
      default: 'bg-grey-800',
      hover: 'hover:bg-grey-700',
    },
  },
  primary: {
    bg: {
      default: 'bg-primary-main',
      hover: 'hover:bg-primary-light',
    },
  },
};

type ButtonVariant = 'solid';
// type ButtonColor = 'default' | 'primary' | 'secondary' | 'info' | 'warning' | 'error';
type ButtonColor = 'default' | 'primary';

// type ButtonSize = 'small' | 'medium' | 'large';
type ButtonSize = 'medium';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  color?: ButtonColor;
  size?: ButtonSize;
  variant?: ButtonVariant;
  isActive?: boolean;
  isDisabled?: boolean;
  isLoading?: boolean;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  href?: string;
  children?: ReactNode;
  className?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    color = 'default',
    variant = 'solid',
    size = 'medium',
    startIcon,
    endIcon,
    isLoading = false,
    isDisabled = false,
    children,
    className,
    ...rest
  } = props;

  // VARIANTS
  const buttonVariant: { [key in ButtonVariant]: string } = {
    solid: classNames(
      [BUTTON_COLORS[color].bg.default, BUTTON_COLORS[color].bg.hover],
      'text-white'
    ),
  };

  const buttonVariantStyles = buttonVariant[variant];

  // SIZES
  const buttonSize: {
    [key in ButtonSize]: { general: string; startIcon: string; endIcon: string };
  } = {
    medium: {
      general: classNames('px-3 py-1.5', 'text-sm leading-6'),
      startIcon: '-ml-1 mr-2 h-5 w-5',
      endIcon: 'ml-2',
    },
  };

  const buttonSizeStyles = buttonSize[size].general;
  const startIconStyles = buttonSize[size].startIcon;
  const endIconStyles = buttonSize[size].endIcon;

  const buttonDisabledStyles = classNames('opacity-70', 'pointer-events-none');

  const styles = classNames(
    'rounded-lg',
    'font-bold',
    'inline-flex items-center justify-center',
    'transition duration-300 ease-in-out',
    buttonVariantStyles,
    buttonSizeStyles,
    { [buttonDisabledStyles]: isLoading || isDisabled },
    className
  );

  return (
    <button ref={ref} className={styles} {...rest}>
      {isLoading && (
        <Iconify
          icon="mingcute:loading-line"
          className={classNames(startIconStyles, 'animate-spin')}
        />
      )}
      {startIcon &&
        !isLoading &&
        cloneElement(startIcon, {
          className: classNames(startIconStyles),
        })}
      {children}
      {endIcon &&
        cloneElement(endIcon, {
          className: classNames(endIconStyles),
        })}
    </button>
  );
});

export default Button;
