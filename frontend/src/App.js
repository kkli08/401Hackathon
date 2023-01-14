import { CameraOutlined, CoffeeOutlined, ReadOutlined, TeamOutlined, EnvironmentOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { useState } from 'react';
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
  getItem('Edmonton', '1', <EnvironmentOutlined />),
  getItem('Food', '2', <CoffeeOutlined />),
  getItem('Education', '3', <ReadOutlined />),
  getItem('Landscape', '4', <CameraOutlined />),
  getItem('Team', 'sub1', <TeamOutlined />, [
    getItem('Damian Li', '5'),
    getItem('Jaden Huang', '6'),
    getItem('Yu Liu', '7'),
  ]),
];
const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div
          style={{
            height: 32,
            margin: 16,
            background: 'rgba(255, 255, 255, 0.2)',
          }}
        >
          <h1 style={{color:'white',
                      zIndex:1,
                      fontSize:15,
                      textAlign:'center',
                      justifyContent:'center'}}>Programming Prophet</h1>
          </div>
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      <Layout className="site-layout">
        <Header 
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
          
        />
        
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
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
            Bill is a cat.
          </div>
        </Content>
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