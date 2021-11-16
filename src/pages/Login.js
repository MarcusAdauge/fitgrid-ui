import React from 'react';
import { useHistory } from "react-router-dom";
import { Form, Input, Typography, Button } from 'antd';
import { Api } from './../services';
import './Login.scss';
import withAuthContainer from '../hoc/AuthContainer';
import { Link } from 'react-router-dom';

const { Title } = Typography;

const Login = () => {
    const history = useHistory();
    const [ form ] = Form.useForm();

    const onLogin = (values) => {
        Api.login(values)
            .then(({success, token}) => {
                if (success && token) {
                    sessionStorage.setItem('auth-token', token);
                    history.push('/');
                }
            });
    }

    return (
        <>
            <Form className="form" form={form} layout="vertical" onFinish={onLogin}>
                <Title level={3}>Welcome to fitgrid.</Title>
                
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: 'Please input your email!' }]}>
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}>
                    <Input.Password />
                </Form.Item>

                <Form.Item wrapperCol={{ span: 24 }}>
                    <Button type="primary" size="large"  htmlType="submit" className="btn-primary btn-signin">
                        Log in
                    </Button>
                </Form.Item>
            </Form>

            <Link to="/register">
                <Button type="link" size="large" className="btn-primary btn-signup">Create an account</Button>
            </Link>
        </>
    );
};

export default withAuthContainer(Login, 'login');