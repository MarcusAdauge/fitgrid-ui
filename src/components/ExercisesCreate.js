import { Row, Col, Select, Form, Input, InputNumber, Tooltip, Space, Button } from "antd";
import { CloseOutlined, PlusOutlined, MinusCircleOutlined } from '@ant-design/icons';
import { useEffect, useState } from "react";
import './ExercisesCreate.scss';
import { set } from "lodash";


const ExercisesCreate = ({ group }) => {
    const [ form ] = Form.useForm();

    useEffect(() => {
      // initialize exercises if exists
      form.setFieldsValue({ exercises: group.exercises });
    }, []);

    const onFieldsChange = ([{ name, value }]) => {
        set(group, name, value);
    }

    return (
      <Form name="dynamic_form_nest_item" className="exercise-form" form={form} onFieldsChange={onFieldsChange} autoComplete="off">
      <Form.List name="exercises">
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, fieldKey, ...restField }) => (
              <Space key={key} align="baseline">
                <Form.Item
                  {...restField}
                  name={[name, 'name']}
                  fieldKey={[fieldKey, 'name']}
                  rules={[{ required: true, message: 'Exercise name required' }]}
                >
                  <Input placeholder="Exercise name" bordered={false}/>
                </Form.Item>
                <Form.Item
                  {...restField}
                  name={[name, 'reps']}
                  fieldKey={[fieldKey, 'reps']}
                  rules={[{ required: true, message: 'Repetitions required' }]}
                >
                  <Input placeholder="Repetitions" bordered={false}/>
                </Form.Item>
                <Form.Item
                  {...restField}
                  name={[name, 'weight']}
                  fieldKey={[fieldKey, 'weight']}
                  rules={[{ required: true, message: 'Weight required' }]}
                >
                  <InputNumber placeholder="Starting weight" bordered={false} style={{width: '100%'}}/>
                </Form.Item>

                <MinusCircleOutlined onClick={() => remove(name)} style={{fontSize: '1.25rem'}} />
              </Space>
            ))}
            <Button type="link" onClick={() => add()} icon={<PlusOutlined />} className="btn-add-exercise">
              Add exercise
            </Button>
          </>
        )}
      </Form.List>
    </Form>
    );
};

export default ExercisesCreate;