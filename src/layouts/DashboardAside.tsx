import NavItem from '../components/layouts/Navigation/NavItem';
import { Icon } from '@iconify/react';
import Logo from '../components/ui/Logo';
import Aside from '../components/layouts/Aside/Aside';
import AsideHead from '../components/layouts/Aside/AsideHead';
import AsideToggleButton from '../components/layouts/Aside/AsideToggleButton';
import AsideBody from '../components/layouts/Aside/AsideBody';
import classNames from 'classnames';
import useSettings from '../hooks/useSettings';
import NavCollapse from '../components/layouts/Navigation/NavCollapse';

const DashboardAside = () => {
  const { isAsideCollapsed } = useSettings();

  return (
    <Aside>
      <AsideHead>
        <AsideToggleButton />
        <Logo
          className={classNames('mt-4', {
            'ml-4': !isAsideCollapsed,
          })}
        />
      </AsideHead>
      <AsideBody>
        <nav>
          <ul>
            <NavItem
              icon={<Icon className="h-6 w-6" icon="solar:bell-bing-bold-duotone" />}
              title="Dashboard"
            />
            <NavItem
              icon={
                <Icon className="h-6 w-6" icon="solar:clapperboard-text-bold-duotone" />
              }
              title="Dashboard"
            />
            <NavCollapse
              icon={
                <Icon className="h-6 w-6" icon="solar:clapperboard-text-bold-duotone" />
              }
              title="Dashboard"
            >
              <span />
            </NavCollapse>
          </ul>
        </nav>
      </AsideBody>
    </Aside>
  );
};

export default DashboardAside;
