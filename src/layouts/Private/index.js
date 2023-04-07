import { Link, NavLink, useLocation } from "react-router-dom";
import { Sidebar, Main, Header, Content, Layout, UserInfo, Role, Username, Logo, Title, ToggleSidebarButton, MenuItem} from "./styles";
import AuthUser from "./AuthUser";
import { BoxPlotOutlined, MenuFoldOutlined, RadarChartOutlined, UserOutlined } from "@ant-design/icons";
import { useState } from "react";
import { Button } from "antd";



const PrivateLayout = ({ children, title }) => {
  const [className, setClassName] = useState("");
  const [activeMenu, setActiveMenu] = useState("users");
  const location = useLocation();

  const toggleSidebar = () =>{
    setClassName(className === "active" ? "" : "active");
  }

  const toggleMenu = async (e) => {
    const pathName = await location.pathname.substring(1);
    console.log(e.target.name + " " + pathName);
  }

  return (
    <Layout className={className}>
      <Sidebar >
        <Logo>{className==="active"?<RadarChartOutlined />:"Dashboard"}</Logo>
        <MenuItem to="/ReactGreen/users"><UserOutlined /> Users</MenuItem>
        <MenuItem to="/ReactGreen/products"><BoxPlotOutlined /> Products</MenuItem>
      </Sidebar>
      <Main>
        <Header>
          <Title>
            <ToggleSidebarButton onClick={toggleSidebar}><MenuFoldOutlined/></ToggleSidebarButton>
            {title}
          </Title>
          <AuthUser/>
        </Header>
        <Content>{children}</Content>
      </Main>
    </Layout>
  );
};

export default PrivateLayout;
