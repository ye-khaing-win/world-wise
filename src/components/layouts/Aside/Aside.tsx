import classNames from 'classnames';
import useSettings from '../../../hooks/useSettings';
import { FC, HTMLAttributes, ReactNode } from 'react';
import { NAV } from '../../../layouts/config';

interface IAsideProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  className?: string;
}

const Aside: FC<IAsideProps> = (props) => {
  const { children, className, ...rest } = props;

  const { isAsideCollapsed } = useSettings();

  return (
    <aside
      className={classNames(
        'fixed bottom-0 top-0 z-20',
        'border-r border-dashed  border-grey-500/30',
        'transition-all duration-300 ease-in-out',

        {
          [NAV.WIDTH]: !isAsideCollapsed,
          [NAV.WIDTH_COLLAPSED]: isAsideCollapsed,
        },
        className
      )}
      {...rest}
    >
      {children}
    </aside>
  );
};

export default Aside;
