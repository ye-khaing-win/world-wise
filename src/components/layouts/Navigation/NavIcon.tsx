import classNames from 'classnames';
import { FC } from 'react';
import useSettings from '../../../hooks/useSettings';
import Iconify from '../../Iconify';

interface INavIconProps {
  icon: string;
  className?: string;
}

const NavIcon: FC<INavIconProps> = (props) => {
  const { icon, className } = props;

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
      <Iconify icon={icon} className="h-6 w-6" />
    </span>
  );
};

export default NavIcon;
