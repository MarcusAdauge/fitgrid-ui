import React from 'react';
import { Form, Input, Typography, Button, DatePicker, Row, Col, Select, notification } from 'antd';
import { Api } from './../services';
import './Register.scss';
import withAuthContainer from '../hoc/AuthContainer';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const { Title } = Typography;
const { Option } = Select;

const passwordRules = [
    { required: true, message: 'Please input your password!' },
    { min: 6, message: 'Should be at least 6 characters long' }
];

const Register = () => {
    const [ form ] = Form.useForm();
    const history = useHistory();

    const onRegister = user => {
        Api.register(user)
            .then(({ success }) => {
                if (success) {
                    notification.success({description: 'User created successfully'});
                    history.push('/login');
                }
            });
    }

    return (
        <>
            <Form className="form" form={form} layout="vertical" onFinish={onRegister}>
                <Title level={3}>Let the journey begin.</Title>
                
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: 'Please input your email!' }]}>
                    <Input />
                </Form.Item>

                <Row gutter={20}>
                    <Col span={12}>
                        <Form.Item
                            label="Birthdate"
                            name="birthDate"
                            rules={[{ required: true, message: 'Please select your birthday!' }]}>
                            <DatePicker className="birthday-picker" />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            label="Gender"
                            name="gender"
                            rules={[{ required: true, message: 'Please select your geneder!' }]}>
                            <Select>
                                <Option value="male">Male</Option>
                                <Option value="female">Female</Option>
                                <Option value="other">Other</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                </Row>

                <Form.Item
                    label="Password"
                    name="password"
                    tooltip="Must contain: at least 1 uppercase letter, 1 lowercase letter, 1 digit, 1 symbol"
                    rules={passwordRules}>
                    <Input.Password />
                </Form.Item>

                <Form.Item wrapperCol={{ span: 24 }}>
                    <Button type="primary" size="large"  htmlType="submit" className="btn-secondary btn-register">
                        Register
                    </Button>
                </Form.Item>
            </Form>

            <Link to="/login">
                <Button type="link" size="large" className="btn-secondary btn-back-to-login">Back to login</Button>
            </Link>
        </>
    );
};

export default withAuthContainer(Register, 'register');