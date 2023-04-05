import { Link } from "react-router-dom";
import { Sidebar, Main, Header, Content, Layout, UserInfo, Role, Username, Logo, Title} from "./styles";
import AuthUser from "./AuthUser";


const PrivateLayout = ({ children, title }) => {
  return (
    <Layout>
      <Sidebar>
        <Logo>Dashboard</Logo>
        <Link to="/users">Users</Link>
        <Link to="/products">Products</Link>
      </Sidebar>
      <Main>
        <Header>
          <Title>{title}</Title>
          <AuthUser/>
        </Header>
        <Content>{children}</Content>
      </Main>
    </Layout>
  );
};

export default PrivateLayout;
