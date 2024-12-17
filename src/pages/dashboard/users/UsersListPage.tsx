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

const tabs = ['All', 'Paid', 'Pending', 'Overdue'];

const UsersListPage = () => {
  return (
    <PageWrapper name="Users">
      <Container>
        <Subheader>
          <div className="grow">
            <h4 className="font-bold text-2xl mb-2 leading-9">List</h4>
            <Breadcrumbs paths={['users', 'list']} />
          </div>
          <Button startIcon={<Iconify icon="mingcute:add-line" />}>New Invoice</Button>
        </Subheader>
        <Card>
          <Tabs>
            {tabs.map((tab, index) => (
              <Tab value={index} key={index}>
                {tab}
                <Badge color="primary" className="ml-2">
                  20
                </Badge>
              </Tab>
            ))}
          </Tabs>
          <div className="h-[20rem]" />
        </Card>
      </Container>
    </PageWrapper>
  );
};

export default UsersListPage;
