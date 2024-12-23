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
import Select, { SelectChangeEvent } from '../../../components/form/Select_';
import MenuItem from '../../../components/ui/Menu/MenuItem';
import Checkbox from '../../../components/form/Checkbox';
import { useState } from 'react';
import SelectTest from '../../../components/form/Select';

const roles_ = [
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

const countries = [
  {
    label: 'Myanmar',
    value: 'myanmar',
  },
  {
    label: 'China',
    value: 'china',
  },
  {
    label: 'Malaysia',
    value: 'malaysia',
  },
];

const UsersListPage = () => {
  const [roles, setRoles] = useState<
    {
      label: string;
      value: string;
    }[]
  >([]);

  const [country, setCountry] = useState<{
    label: string;
    value: string;
  } | null>(null);

  const handleSelectCountry = (e: SelectChangeEvent) => {
    const value = e.target.value;

    setCountry(countries.find((c) => c.value === value)!);
  };

  const handleSelectRoles = (e: SelectChangeEvent<string[]>) => {
    const value = e.target.value;

    // if (!value) return;
    if (!Array.isArray(value)) return;

    setRoles(value.map((val) => roles_.find((role) => role.value === val)!));

    // setRoles(typeof value === 'string' ? value.split(',') : value);
    // setRoles(typeof value === 'string' ? value.split(',') : value);

    // console.log(roles)
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
            <FieldWrap className="flex items-center justify-center">
              <Label variant="shrink">First Name</Label>
              <Input />
            </FieldWrap>

            <FieldWrap>
              <Label variant="shrink">Role</Label>
              <SelectTest
                multiple
                value={roles.map((r) => r.value)}
                onChange={handleSelectRoles}
              >
                {roles_.map((role) => (
                  <MenuItem key={role.value} value={role.value}>
                    <Checkbox
                      id={role.value}
                      checked={roles.map((r) => r.value).includes(role.value)}
                    />
                    {role.label}
                  </MenuItem>
                ))}
              </SelectTest>
            </FieldWrap>

            <FieldWrap>
              <Label variant="shrink">City</Label>
              <SelectTest value={country?.value} onChange={handleSelectCountry}>
                {countries.map((country) => (
                  <MenuItem key={country.value} value={country.value}>
                    {country.label}
                  </MenuItem>
                ))}
              </SelectTest>
            </FieldWrap>
          </div>

          <div className="h-[20rem]" />
        </Card>
      </Container>
    </PageWrapper>
  );
};

export default UsersListPage;
