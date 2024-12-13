import classNames from 'classnames';
import { FC, HTMLAttributes, ReactElement } from 'react';
import useSettings from '../../../hooks/useSettings';
import { NavLink } from 'react-router-dom';
import styles from './styles';
import NavIcon from './NavIcon';
import NavItemText from './NavItemText';

interface INavItemProps extends HTMLAttributes<HTMLLIElement> {
  icon: ReactElement;
  title: string;
  to?: string;
}

const NavItem: FC<INavItemProps> = (props) => {
  const { icon, title, to } = props;
  const { isAsideCollapsed } = useSettings();

  const CONTENT = (
    <>
      {icon && <NavIcon className={classNames('w-6 h-6')}>{icon}</NavIcon>}
      <div
        className={classNames('flex w-full items-center justify-between', {
          hidden: isAsideCollapsed,
        })}
      >
        <NavItemText className="capitalize">{title}</NavItemText>
      </div>
    </>
  );

  return (
    <li className={classNames('list-none overflow-hidden')}>
      {to ? (
        <NavLink
          to={to}
          end
          className={({ isActive }) =>
            isActive ? classNames(styles.default, styles.activeRoot) : ''
          }
        >
          {CONTENT}
        </NavLink>
      ) : (
        <div role="presentation" className={classNames(styles.default)}>
          {CONTENT}
        </div>
      )}
    </li>
  );
};

export default NavItem;
