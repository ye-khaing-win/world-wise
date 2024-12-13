import classNames from 'classnames';
import { FC, ReactNode } from 'react';
import useSettings from '../../../hooks/useSettings';

interface INavIconProps {
  className?: string;
  children?: ReactNode;
}

const NavIcon: FC<INavIconProps> = (props) => {
  const { className, children } = props;

  const { isAsideCollapsed } = useSettings();

  return (
    <span
      className={classNames(
        'flex items-center justify-center',
        {
          'me-4': !isAsideCollapsed,
        },
        className
      )}
    >
      {children}
    </span>
  );
};

export default NavIcon;
