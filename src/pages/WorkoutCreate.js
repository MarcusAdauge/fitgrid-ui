import { Select, Card, Row, Col, Tooltip, Button, Radio } from 'antd';
import { CloseOutlined, SaveOutlined, PlusOutlined } from '@ant-design/icons';
import './WorkoutCreate.scss';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Utils } from '../services';
import MuscleGroupCreate from '../components/MuscleGroupCreate';

const { Option } = Select;
const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
];

const WorkoutCreate = () => {
    const [day, setDay] = useState('Monday');
    const [form, setForm] = useState(days.reduce((acc, day) => {
        const groups = [Utils.newGroup()];
        return { ...acc, [day]: groups };
    }, {}));
    const [groups, setGroups] = useState([]);

    const handleDayChange = e => {
        const selectedDay = e.target.value;
        setDay(selectedDay);
        setGroups(form[selectedDay]);
    }

    const saveWorkout = () => {
        console.log(form);
    }

    const addGroup = () => {
        const newGroups = [...groups, Utils.newGroup()];
        setGroups(newGroups);
        setForm({...form, [day]: newGroups});
    }

    useEffect(() => {
        setGroups(form['Monday']);
    }, []);

    return (<div className="workout-create">
        <Row gutter={8}>
            <Col span={22}>
                <Radio.Group value={day} onChange={handleDayChange} size="large" className="days">
                    { 
                        days.map((day, i) => (
                            <Radio.Button className="day" value={day} key={day}>
                                { day }
                            </Radio.Button>))
                    }
                </Radio.Group>
            </Col>
            <Col span={2} className="actions">
                <Tooltip title="save">
                    <Button onClick={saveWorkout} className="btn-save" type="dashed" shape="circle" size="large" icon={<SaveOutlined />}></Button>
                </Tooltip>
                <Link to="/workouts">
                    <Tooltip title="cancel">
                        <Button type="dashed" shape="circle" size="large" icon={<CloseOutlined />}></Button>
                    </Tooltip>
                </Link>
            </Col>
        </Row>

        { groups.map(group => (<MuscleGroupCreate group={group} key={group.id}/>)) }

        <Button type="dashed" onClick={addGroup} block icon={<PlusOutlined />} size="large" className="btn-add-group">
            Add group
        </Button>
    </div>);
};

export default WorkoutCreate;
