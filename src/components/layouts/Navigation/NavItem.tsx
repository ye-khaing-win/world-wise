import classNames from 'classnames';
import { FC, HTMLAttributes } from 'react';
import useSettings from '../../../hooks/useSettings';
import { NavLink } from 'react-router-dom';
import styles from './styles';
import NavIcon from './NavIcon';
import NavItemText from './NavItemText';

interface INavItemProps extends HTMLAttributes<HTMLLIElement> {
  icon: string;
  title: string;
  to?: string;
  depth?: number;
  className?: string;
}

const NavItem: FC<INavItemProps> = (props) => {
  const { icon, title, to, depth, className } = props;
  const { isAsideCollapsed } = useSettings();

  console.log({ depth, title });

  const isSubItem = depth !== 1;

  const CONTENT = (
    <>
      {icon && (
        <NavIcon
          className={classNames({
            'h-4 w-4': isSubItem,
            'ml-1 mr-5': isSubItem && !isAsideCollapsed,
          })}
          icon={icon}
        />
      )}
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
    <li className={classNames('list-none overflow-hidden mb-1', className)}>
      {to ? (
        <NavLink
          to={to}
          end
          className={({ isActive }) =>
            isActive
              ? classNames(styles.default, styles.activeRoot, {
                  'min-h-9': isSubItem,
                })
              : ''
          }
        >
          {CONTENT}
        </NavLink>
      ) : (
        <div
          role="presentation"
          className={classNames(styles.default, {
            'min-h-9': isSubItem,
          })}
        >
          {CONTENT}
        </div>
      )}
    </li>
  );
};

export default NavItem;
