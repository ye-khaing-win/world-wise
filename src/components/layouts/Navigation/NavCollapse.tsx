import classNames from 'classnames';
import { FC, HTMLAttributes, ReactElement, ReactNode } from 'react';
import styles from './styles';
import NavIcon from './NavIcon';
import NavItemText from './NavItemText';
import useSettings from '../../../hooks/useSettings';
import { Icon } from '@iconify/react/dist/iconify.js';

interface INavCollapseProps extends HTMLAttributes<HTMLLIElement> {
  children: ReactNode;
  icon: ReactElement;
  title: string;
  className?: string;
}

const NavCollapse: FC<INavCollapseProps> = (props) => {
  const { children, icon, title, className, ...rest } = props;

  const { isAsideCollapsed } = useSettings();

  return (
    <li className={classNames('list-none overflow-hidden', className)} {...rest}>
      <div role="presentation" className={classNames(styles.default)}>
        <NavIcon>{icon}</NavIcon>
        <div
          className={classNames('flex w-full items-center justify-between', {
            hidden: isAsideCollapsed,
          })}
        >
          <NavItemText className="capitalize">{title}</NavItemText>

          <div>
            {/* <HeroIcon2
              icon="HiChevronDown"
              className={classNames(
                'text-2xl',
                { 'rotate-180': isActive },
                themeConfig.transition
              )}
            ></HeroIcon2> */}
            <Icon width={16} icon="eva:arrow-ios-downward-fill" className="ml-2" />
          </div>
        </div>
      </div>
    </li>
  );
};

export default NavCollapse;
