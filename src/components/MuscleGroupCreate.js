import { Row, Col, Select } from "antd";
import { useState } from "react";
import './MuscleGroupCreate.scss';
import ExercisesCreate from "./ExercisesCreate";

const { Option } = Select;
const muscleGroups = [
    'Chest',
    'Biceps',
    'Back',
    'Triceps'
]

const MuscleGroupCreate = ({ group }) => {
    const [ groupName, setGroupName ] = useState(group.name || undefined);

    const onGroupChange = name => {
        setGroupName(name);
        group.name = name;
    };

    return (<div className="muscle-group-create">
        <Row className="group">
            <Col span={4} className="muscle-select">
                <Select
                    placeholder="Muscle group"
                    onChange={ onGroupChange }
                    value={groupName}
                    bordered={false}>
                    { muscleGroups.map(g => (<Option value={g.toLowerCase()} key={g}>{ g }</Option>)) }
                </Select>
            </Col>
            <Col span={20} className="exercises">
                <ExercisesCreate group={group}/>
            </Col>
        </Row>
    </div>)
};

export default MuscleGroupCreate;