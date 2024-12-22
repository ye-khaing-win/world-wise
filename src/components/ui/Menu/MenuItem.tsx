import classNames from 'classnames';
import { FC, HTMLAttributes, ReactNode } from 'react';

interface MenuItemProps extends HTMLAttributes<HTMLLIElement> {
  children: ReactNode;
  className?: string;
  selected?: boolean;
  value?: string;
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
        {
          'bg-grey-500/20 font-semibold': selected,
          'bg-white': !selected,
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
