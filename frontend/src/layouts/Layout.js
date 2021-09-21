import {Layout, Menu, notification} from 'antd';
import {
    UserOutlined, LogoutOutlined
} from '@ant-design/icons';
import {useCallback, useContext} from 'react';
import {
    Link,
    useLocation
} from "react-router-dom";
import {AuthContext} from '../auth/AuthContext';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export const LayoutPage = ({children}) => {
    let location = useLocation();
    const {isAuthenticated, logout} = useContext(AuthContext);
    const year = new Date().getFullYear();

    const logoutFromAccount = useCallback(() => {
        logout();
        notification.success({message: 'Успішно!', description: 'Ви вийшли з системи!'})
    }, [logout]);

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Header className="site-layout-header">
                <div className="site-layout-header-logo">
                    <Link to={'/'}>Gym</Link>
                </div>
                <Menu mode="horizontal" selectedKeys={['/']} className={"site-layout-header-menu"}>
                  <Menu.Item key="logout" icon={<LogoutOutlined />}><Link to="/" onClick={logoutFromAccount}>Выйти</Link></Menu.Item>
                </Menu>
            </Header>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Content
              className="site-layout-background">
              {children}
            </Content>
          </Layout>
            <Footer style={{ textAlign: 'center' }}>Gym Calendar ©{year}<br /></Footer>
        </Layout>
    );
};