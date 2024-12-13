import classNames from 'classnames';
import { FC, HTMLAttributes, ReactNode } from 'react';

interface INavItemTextProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  isActive?: boolean;
}

const NavItemText: FC<INavItemTextProps> = (props) => {
  const { children, className, isActive, ...rest } = props;

  return (
    <div
      className={classNames(
        'truncate',
        'text-sm',
        {
          'font-semibold': isActive,
          'font-medium': !isActive,
        },
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

export default NavItemText;
