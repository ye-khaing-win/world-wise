import classNames from 'classnames';
import { FC, HTMLAttributes, ReactNode } from 'react';

export interface MenuItemProps extends HTMLAttributes<HTMLLIElement> {
  children: ReactNode;
  className?: string;
  selected?: boolean;
  value?: string | number;
  label?: string;
}

const MenuItem: FC<MenuItemProps> = (props) => {
  const { selected = false, children, className, ...rest } = props;

  return (
    <li
      tabIndex={-1}
      className={classNames(
        'cursor-pointer',
        'px-2 py-1.5',
        'mb-1 last:mb-0',
        'w-full',
        'rounded-md',
        'hover:bg-grey-500/10',
        'text-sm',
        'flex items-center',
        '[&>svg]:mr-4',
        {
          'bg-grey-500/20 font-semibold': selected,
          'bg-transparent': !selected,
        },
        className
      )}
      {...rest}
    >
      {children}
    </li>
  );
};

export default MenuItem;
