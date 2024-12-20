import classNames from 'classnames';
import Iconify from '../../../components/Iconify';
import Container from '../../../components/layouts/Container/Container';
import PageWrapper from '../../../components/layouts/PageWrapper/PageWrapper';
import Subheader from '../../../components/layouts/Subheader/Subheader';
import Badge from '../../../components/ui/Badge';
import Breadcrumbs from '../../../components/ui/Breadcrumbs';
import Button from '../../../components/ui/Button';
import Card from '../../../components/ui/Card';
import Tab from '../../../components/ui/Tabs/Tab';
import Tabs from '../../../components/ui/Tabs/Tabs';
import { TColor } from '../../../types/color';
import Input from '../../../components/form/Input';
import FieldWrapper from '../../../components/form/FieldWrap';
import Label from '../../../components/form/Label';
import Select from '../../../components/form/Select';
import Menu from '../../../components/ui/Menu/Menu';
import MenuItem from '../../../components/ui/Menu/MenuItem';

type TTab = {
  value: number;
  label: string;
  color: TColor;
  count: number;
};

const TABS: TTab[] = [
  {
    value: 0,
    label: 'All',
    color: 'default',
    count: 20,
  },
  {
    value: 1,
    label: 'Paid',
    color: 'success',
    count: 10,
  },
  {
    value: 2,
    label: 'Pending',
    color: 'warning',
    count: 6,
  },
  {
    value: 3,
    label: 'Overdue',
    color: 'error',
    count: 2,
  },
  {
    value: 4,
    label: 'Draft',
    color: 'default',
    count: 2,
  },
];

const UsersListPage = () => {
  return (
    <PageWrapper name="Users">
      <Container>
        {/* SUBHEADER */}
        <Subheader>
          <div className="grow">
            <h4 className="font-bold text-2xl mb-2 leading-9">List</h4>
            <Breadcrumbs paths={['users', 'list']} />
          </div>
          <Button startIcon={<Iconify icon="mingcute:add-line" />}>
            New Invoice
          </Button>
        </Subheader>
        <Card>
          {/* TABS */}
          <Tabs>
            {TABS.map((tab) => (
              <Tab value={tab.value} key={tab.value}>
                {tab.label}
                <Badge color={tab.color} className="ml-2">
                  {tab.count}
                </Badge>
              </Tab>
            ))}
          </Tabs>

          {/* TABLE TOOLBAR */}
          <div
            className={classNames(
              'flex md:items-center xs:items-end md:flex-row xs:flex-col gap-4',
              'p-5 md:pr-2 xs:pr-5'
            )}
          >
            <FieldWrapper className="flex items-center justify-center">
              <Input />
              <Label variant="shrink">First Name</Label>
            </FieldWrapper>

            <FieldWrapper>
              <Label variant="shrink">Role</Label>
              <Select>
                <Menu>
                  <MenuItem>
                    <input type="checkbox" />
                    Admin
                  </MenuItem>
                  <MenuItem>Superuser</MenuItem>
                  <MenuItem>Developer</MenuItem>
                  <MenuItem>Tester</MenuItem>
                </Menu>
              </Select>
            </FieldWrapper>
          </div>

          <div className="h-[20rem]" />
        </Card>
      </Container>
    </PageWrapper>
  );
};

export default UsersListPage;
