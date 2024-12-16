import Container from '../../../components/layouts/Container/Container';
import PageWrapper from '../../../components/layouts/PageWrapper/PageWrapper';
import Subheader from '../../../components/layouts/Subheader/Subheader';

const UsersListPage = () => {
  return (
    <PageWrapper name="Users">
      <Container>
        <Subheader>
          <div className="grow">
            <h4 className="font-bold text-2xl mb-2 leading-9">List</h4>
            <div>Breadcrumbs</div>
          </div>
        </Subheader>
        <div className="bg-green-300 h-[200rem]" />
      </Container>
    </PageWrapper>
  );
};

export default UsersListPage;
