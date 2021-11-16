import { Statistic, Card, Row, Col, Tooltip, Button, Empty } from 'antd';
import { ArrowUpOutlined, PlusOutlined } from '@ant-design/icons';
import './Workouts.scss';
import { Link } from 'react-router-dom';

const Workouts = () => {
    return (
        <div className="workouts">
            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
            <Link to="/workouts/new"> 
                <Tooltip title="new workout">
                    <Button className="btn-primary btn-add-workout" shape="circle" size="large" icon={<PlusOutlined />} />
                </Tooltip>
            </Link>
      </div>
    );
};

export default Workouts;
