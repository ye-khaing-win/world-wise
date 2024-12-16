import classNames from 'classnames';
import { FC, HTMLAttributes, ReactNode } from 'react';
import useSettings from '../../../hooks/useSettings';

interface NavTitleProps extends HTMLAttributes<HTMLLIElement> {
  children: ReactNode;
  className?: string;
}

const NavTitle: FC<NavTitleProps> = (props) => {
  const { children, className, ...rest } = props;

  const { isAsideCollapsed } = useSettings();

  return (
    <li
      className={classNames(
        'list-none truncate',
        'text-[11px] cursor-pointer font-bold uppercase',
        'flex items-center',
        {
          'justify-center': isAsideCollapsed,
          'justify-start': !isAsideCollapsed,
        },
        'min-h-11',
        'px-3',
        'mb-1',
        'text-grey-500',
        'transition-colors duration-300 ease-in-out',
        'hover:text-grey-800',
        className
      )}
      {...rest}
    >
      {isAsideCollapsed ? (
        <div
          className={classNames('h-1.5 w-8 max-w-[6rem]', 'rounded-full', 'bg-grey-500')}
        />
      ) : (
        children
      )}
    </li>
  );
};

export default NavTitle;
