import classNames from 'classnames';
import { forwardRef, HTMLAttributes, ReactNode } from 'react';

interface MenuProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

const Menu = forwardRef<HTMLDivElement, MenuProps>((props, ref) => {
  const { children, className, ...rest } = props;

  return (
    <div
      ref={ref}
      className={classNames(
        'absolute',
        'paper',
        'p-1',
        'shadow-menu',
        'rounded-lg',
        'min-h-4 max-h-60',
        className
      )}
      {...rest}
    >
      <ul tabIndex={-1} className="list-none">
        {children}
      </ul>
    </div>
  );
});

export default Menu;
