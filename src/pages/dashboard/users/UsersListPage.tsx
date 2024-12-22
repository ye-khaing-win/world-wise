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
import Select, { SelectChangeEvent } from '../../../components/form/Select';
import Menu from '../../../components/ui/Menu/Menu';
import MenuItem from '../../../components/ui/Menu/MenuItem';
import Checkbox from '../../../components/form/Checkbox';
import { ChangeEvent, useState } from 'react';

const roles = [
  'HR Manager',
  'Data Analyst',
  'Legal Counsel',
  'UX/UI Designer',
  'Project Manager',
  'Account Manager',
  'Registered Nurse',
  'Business Analyst',
  'Creative Director',
  'Financial Planner',
  'Event Coordinator',
  'Marketing Director',
  'Software Developer',
  'Research Scientist',
  'Content Strategist',
  'Operations Manager',
  'Sales Representative',
  'Supply Chain Analyst',
  'Operations Coordinator',
  'Customer Service Associate',
  'Quality Assurance Specialist',
  'CEO',
  'CFO',
  'CTO',
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

  const handleSelectRoles = (e: SelectChangeEvent<string[]>) => {
    const value = e.target.value;

    console.log(value);

    // setRoles(typeof value === 'string' ? value.split(',') : value);
    setRoles(typeof value === 'string' ? value.split(',') : value);

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
            <FieldWrapper className="flex items-center justify-center">
              <Input />
              <Label variant="shrink">First Name</Label>
            </FieldWrapper>

            <FieldWrapper>
              <Label variant="shrink">Role</Label>
              <Select
                multiple
                value={roles}
                renderedValue={(value) => value.join(', ')}
                onChange={handleSelectRoles}
              >
                {/* <Menu> */}
                <MenuItem value="Admin">
                  <Checkbox id="admin" checked={roles.includes('Admin')} />
                  Admin
                </MenuItem>
                <MenuItem value="Superuser">
                  <Checkbox
                    id="superuser"
                    checked={roles.includes('Superuser')}
                  />
                  Superuser
                </MenuItem>
                <MenuItem value="Developer">
                  <Checkbox
                    id="developer"
                    checked={roles.includes('Developer')}
                  />
                  Developer
                </MenuItem>
                <MenuItem value="Tester">
                  <Checkbox id="tester" checked={roles.includes('Tester')} />
                  Tester
                </MenuItem>
                {/* </Menu> */}
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
