import classNames from 'classnames';
import { FC, HTMLAttributes, ReactNode, useState } from 'react';
import styles from './styles';
import NavIcon from './NavIcon';
import NavItemText from './NavItemText';
import useSettings from '../../../hooks/useSettings';
import { AnimatePresence, motion } from 'framer-motion';
import Iconify from '../../Iconify';

interface INavCollapseProps extends HTMLAttributes<HTMLLIElement> {
  children: ReactNode;
  icon: string;
  title: string;
  depth?: number;
  className?: string;
}

const NavCollapse: FC<INavCollapseProps> = (props) => {
  const { children, icon, title, depth, className, ...rest } = props;

  const [isActive, setIsActive] = useState<boolean>(false);

  const { isAsideCollapsed } = useSettings();

  const isSubCollapse = depth !== 1;

  return (
    <li className={classNames('list-none overflow-hidden', 'mb-1', className)} {...rest}>
      <div
        role="presentation"
        className={classNames(styles.default, {
          'min-h-9': isSubCollapse,
        })}
        onClick={() => setIsActive(!isActive)}
      >
        {icon && (
          <NavIcon
            className={classNames({
              'h-4 w-4': isSubCollapse,
              'ml-1 mr-5': isSubCollapse && !isAsideCollapsed,
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

          <div>
            <Iconify
              width={16}
              icon={'eva:arrow-ios-forward-fill'}
              className={classNames(
                'ml-2',
                { 'rotate-90': isActive },
                'transition-all duration-300 ease-in-out'
              )}
            />
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isActive && (
          <motion.ul
            key={'id'}
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { height: 'auto' },
              collapsed: { height: 0 },
            }}
            transition={{ duration: 0.3 }}
            // className={classNames({
            //   'ml-4': !isAsideCollapsed,
            // })}
          >
            {children}
          </motion.ul>
        )}
      </AnimatePresence>
    </li>
  );
};

export default NavCollapse;
