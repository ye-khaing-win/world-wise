import classNames from 'classnames';
import { forwardRef, HTMLAttributes, ReactNode } from 'react';

type IconButtonSize = 'medium';

interface IconButtonProps extends HTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
  size?: IconButtonSize;
}

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (props, ref) => {
    const { className, children, size = 'medium', ...rest } = props;

    // SIZE
    const iconButtonSize: { [key in IconButtonSize]: string } = {
      medium: classNames('p-2'),
    };

    const iconButtonSizeStyles = iconButtonSize[size];

    const iconButtonStyles = classNames(
      'rounded-full',
      'inline-flex items-center justify-center',
      'hover:bg-grey-600/10',
      'transition-colors duration-150 ease-in-out',
      iconButtonSizeStyles,
      className
    );

    return (
      <button ref={ref} className={iconButtonStyles} {...rest}>
        {children}
      </button>
    );
  }
);

export default IconButton;
