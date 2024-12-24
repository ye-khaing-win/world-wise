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
import FieldWrap from '../../../components/form/FieldWrap';
import Label from '../../../components/form/Label';
// import Select, { SelectChangeEvent } from '../../../components/form/Select_';
import MenuItem from '../../../components/ui/Menu/MenuItem';
import Checkbox from '../../../components/form/Checkbox';
import { useState } from 'react';
import Select, { SelectChangeEvent } from '../../../components/form/Select';
import InputWrap from '../../../components/form/InputWrap';
import IconButton from '../../../components/ui/IconButton';
import usePopover from '../../../components/ui/Popover/usePopover';
import Popover from '../../../components/ui/Popover/Popover';

const dummyRoles = [
  {
    label: 'Admin',
    value: 'admin',
  },
  {
    label: 'Superuser',
    value: 'superuser',
  },
  {
    label: 'Manager',
    value: 'manager',
  },
  {
    label: 'Developer',
    value: 'developer',
  },
  {
    label: 'Tester',
    value: 'tester',
  },
  {
    label: 'Project Manager',
    value: 'product_manager',
  },
];

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
  const [roles, setRoles] = useState<string[]>([]);
  const popover = usePopover();

  const handleSelectRoles = (e: SelectChangeEvent<string[]>) => {
    const value = e.target.value;

    setRoles(value);
  };

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
            <FieldWrap className="md:w-[200px] xs:w-full">
              <Label variant="shrink">Role</Label>
              <Select
                value={roles}
                onChange={handleSelectRoles}
                renderValue={(values) =>
                  values
                    .map((val) => {
                      return dummyRoles.find((dr) => dr.value === val)?.label;
                    })
                    .join(', ')
                }
              >
                {dummyRoles.map((role) => (
                  <MenuItem key={role.value} value={role.value}>
                    <Checkbox
                      id={role.value}
                      checked={roles.includes(role.value)}
                    />
                    {role.label}
                  </MenuItem>
                ))}
              </Select>
            </FieldWrap>
            <div className="flex items-center gap-4 grow">
              <FieldWrap className="w-full">
                <InputWrap
                  firstChild={
                    <Iconify icon="eva:search-fill" className="text-grey-600" />
                  }
                >
                  <Input placeholder="Search..." />
                </InputWrap>
              </FieldWrap>
              <IconButton onClick={popover.onOpen}>
                <Iconify
                  icon="eva:more-vertical-fill"
                  className="text-grey-600"
                />
              </IconButton>
            </div>
          </div>
          <Popover
            open={Boolean(popover.anchorEl)}
            anchorEl={popover.anchorEl!}
            onClose={popover.onClose}
          >
            <MenuItem>A</MenuItem>
          </Popover>

          <div className="h-[20rem]" />
        </Card>
      </Container>
    </PageWrapper>
  );
};

export default UsersListPage;
