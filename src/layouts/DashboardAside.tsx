import NavItem from '../components/layouts/Navigation/NavItem';
import Logo from '../components/ui/Logo';
import Aside from '../components/layouts/Aside/Aside';
import AsideHead from '../components/layouts/Aside/AsideHead';
import AsideToggleButton from '../components/layouts/Aside/AsideToggleButton';
import AsideBody from '../components/layouts/Aside/AsideBody';
import classNames from 'classnames';
import useSettings from '../hooks/useSettings';
import NavCollapse from '../components/layouts/Navigation/NavCollapse';
import useNavGroups, { NavGroupProps } from '../hooks/useNavGroups';
import NavTitle from '../components/layouts/Navigation/NavTitle';

const DashboardAside = () => {
  const { isAsideCollapsed } = useSettings();
  const navGroups = useNavGroups();

  const renderNavGroups = (navGroups: NavGroupProps[], depth?: number) => {
    if (typeof depth === 'number') {
      depth++;
    } else {
      depth = 1;
    }

    return navGroups.map(({ id, title, icon, type, children }) => {
      switch (type) {
        case 'title':
          return <NavTitle key={id}>{title}</NavTitle>;
        case 'collapse':
          return (
            <NavCollapse key={id} icon={icon!} title={title} depth={depth}>
              {children && renderNavGroups(children, depth)}
            </NavCollapse>
          );
        case 'item':
          return <NavItem key={id} icon={icon!} title={title} depth={depth} />;
      }
    });
  };

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
          <ul>{renderNavGroups(navGroups)}</ul>
        </nav>
      </AsideBody>
    </Aside>
  );
};

export default DashboardAside;
