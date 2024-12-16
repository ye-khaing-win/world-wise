import { FC, ReactNode } from 'react';
import Header from './Header';
import Aside from './DashboardAside';
import classNames from 'classnames';
import useSettings from '../hooks/useSettings';

interface IDashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout: FC<IDashboardLayoutProps> = (props) => {
  const { children } = props;

  const { isAsideCollapsed } = useSettings();

  return (
    <>
      <Aside />
      <div
        className={classNames(
          {
            ['pl-[280px]']: !isAsideCollapsed,
            ['pl-[88px]']: isAsideCollapsed,
          },
          'transition-all duration-300 ease-in-out'
        )}
      >
        <Header />
        {children}
      </div>
    </>
  );
};

export default DashboardLayout;
