import classNames from 'classnames';
import { FC, HTMLAttributes, ReactNode } from 'react';

interface MenuProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

const Menu: FC<MenuProps> = (props) => {
  const { children, className, ...rest } = props;

  return (
    <div
      tabIndex={-1}
      className={classNames(
        'absolute',
        'p-1',
        'shadow-menu',
        'min-h-4 max-h-60',
        'rounded-lg',
        'bg-white',
        className
      )}
      {...rest}
    >
      <ul tabIndex={-1} className="list-none">
        {children}
      </ul>
    </div>
  );
};

export default Menu;
