import React from 'react';
import { Layout, Row, Col } from 'antd';
import './AuthContainer.scss';
import Logo from '../components/Logo';

const withAuthContainer = (Component, customClass) => {
    return (props) => (
        <Layout className={`auth-layout ${customClass}`}>
            <Row className="row">
                <Col span={13} className="col col-left">
                    <Logo flat={true} large={true} />
                </Col>
                <Col span={11} className="col col-right">
                    <Component { ...props } />
                </Col>
            </Row>
        </Layout>
    );
}

export default withAuthContainer;