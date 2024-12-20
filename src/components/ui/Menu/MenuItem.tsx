import classNames from 'classnames';
import { FC, HTMLAttributes, ReactNode } from 'react';

interface MenuItemProps extends HTMLAttributes<HTMLLIElement> {
  children: ReactNode;
  className?: string;
}

const MenuItem: FC<MenuItemProps> = (props) => {
  const { children, className, ...rest } = props;

  return (
    <li
      className={classNames(
        'cursor-pointer',
        'px-2 py-1.5',
        'mb-1 last:mb-0',
        'w-full',
        'rounded-md',
        'bg-white hover:bg-grey-500/10',
        'text-sm',
        className
      )}
      {...rest}
    >
      {children}
    </li>
  );
};

export default MenuItem;
