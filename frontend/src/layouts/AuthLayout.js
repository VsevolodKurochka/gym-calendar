import logo from 'assets/logo.svg';
import {Typography} from 'antd';
const { Title, Text } = Typography;

export const AuthLayout = ({children}) => {
  return (
    <div className="auth-layout">
      <div className="auth-layout-inner">
        <div className={"auth-layout-header"}>
          <div className="auth-layout-top">
            <img src={logo} className="auth-layout-logo"/>
            <Title className={"auth-layout-title"}>Спортивный календарь</Title>
          </div>
          <Text type={"secondary"} className={"auth-layout-description"}>Стань профессионалом!</Text>
        </div>
        <div className="auth-layout-form">
          {children}
        </div>
      </div>
    </div>
  );
};