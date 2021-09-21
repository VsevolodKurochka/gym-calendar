import { Form, Input, Button, Typography, notification } from 'antd';
import {AuthLayout} from '../../layouts/AuthLayout';
import api from '../../api';
import {Redirect} from 'react-router-dom';
import {notifyHandler} from '../../utils/notifications';
import {useContext} from 'react';
import {AuthContext} from '../../auth/AuthContext';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import GoogleLogin from 'react-google-login';

const layout = {
    labelCol: { span: 7 },
    wrapperCol: { span: 10 },
};

const tailLayout = {
    wrapperCol: {
        offset: 10,
        span: 3,
    },
};

const { Title } = Typography;

const LoginPage = () => {
    const {isAuthenticated, login} = useContext(AuthContext);

    const onFinish = async ({email, password}) => {

        await api
            .post('/auth/login', {email, password})
            .then(({data}) => {
                login(data.token, data.id);
            })
            .catch((e) => {
                notification.error(notifyHandler(e.response.data.message))
            });
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const responseGoogle = (response) => {
        console.log(response);
    }

    if (isAuthenticated) {
        return <Redirect to={{pathname: '/'}} />
    }

    return (
        <AuthLayout>
            <Typography.Title level={2} style={{'textAlign': 'center'}}>Войти</Typography.Title>
            <Form
                name="basic"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    name="email"
                    rules={[{ required: true, message: 'Введите Email!' }]}
                >
                    <Input prefix={<UserOutlined />}  placeholder={"Email"} size={"large"} />
                </Form.Item>

                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Введите пароль!' }]}
                >
                    <Input.Password
                      prefix={<LockOutlined className="site-form-item-icon" />}
                      type="password"
                      placeholder="Пароль"
                      size={"large"}
                    />
                </Form.Item>

                <Form.Item >
                    <Button type="primary" htmlType="submit" size="large" block={true}>
                        Подтвердить
                    </Button>
                    <div className="text-center" style={{'marginTop': '15px'}}>
                        <Typography.Text type="secondary">или</Typography.Text><br /><br />
                        <GoogleLogin
                          style={{'marginTop': '15px'}}
                          clientId={process.env.REACT_APP_GOOGLE_AUTH_CLIENT_ID}
                          buttonText="Войти через Google"
                          onSuccess={responseGoogle}
                          onFailure={responseGoogle}
                          cookiePolicy={'single_host_origin'}
                        />
                    </div>

                </Form.Item>
            </Form>
        </AuthLayout>
    );
};

export default LoginPage;
