import { Outlet, useNavigate } from "react-router-dom"
import { CameraOutlined, CoffeeOutlined, ReadOutlined, TeamOutlined, EnvironmentOutlined, GithubOutlined, AlipayOutlined, ZhihuOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { useState } from 'react';
import Attraction from './components/Attraction';
const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem('Edmonton', '/Edmonton', <EnvironmentOutlined />),
  getItem('Food', '/Food', <CoffeeOutlined />),
  getItem('Education', '/Education', <ReadOutlined />),
  getItem('Landscape', '/Landscape', <CameraOutlined />),
  getItem('Team', 'sub1', <TeamOutlined />, [
    getItem('Damian Li', '5', <GithubOutlined />),
    getItem('Jaden Huang', '6'),
    getItem('Yu Liu', '7'),
  ]),
];
const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const navigateTo = useNavigate();
  const menuClick = (e)=>{
    console.log("clicked navibar No.", e.key);

    // 点击跳转路由
    navigateTo(e.key);
  }

  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      {/* left side navibar */}
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div
          style={{
            height: 32,
            margin: 16,
            background: 'rgba(255, 255, 255, 0.2)',
          }}
        >
          {/* <h1 style={{color:'white',
                      zIndex:1,
                      fontSize:15,
                      textAlign:'center',
                      justifyContent:'center',
                      fontFamily:'papyrus'}}>Programming Prophet</h1> */}
          </div>
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} onClick={menuClick} />
      </Sider>
      {/* right side content */}
      <Layout className="site-layout">
        {/* right side header */}
        <Header 
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <h1 style={{color:'black',
                      zIndex:1,
                      fontSize:30,
                      textAlign:'center',
                      justifyContent:'center',
                      fontFamily:'papyrus'}}>Programming Prophet</h1>
        </Header>  
        
        {/* right side content */}
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item>Attractions</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
          {/* 内容 */}
            <Outlet />
          </div>
        </Content>
        {/* right side footer */}
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
export default App;