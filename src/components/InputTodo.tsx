import React from 'react';
import { Button, Form, Input } from 'antd';
import store from '../store/store';
import { observer } from 'mobx-react';


const InputTodo: React.FC = () => {
    const onFinish = (values: any) => {
        const { task } = values;
        // store.addTodo();
        store.postTodosToApi()
    };
    return <Form
        name="basic"
        labelCol={{ span: 10 }}
        wrapperCol={{ span: 16 }}
        layout='inline'
        onFinish={onFinish}
    >
        <Form.Item
            label="Enter Your Tasks"
            name="task"
            rules={[{ required: true, message: 'Please enter your task!' }]}
        >
            <Input value={store.newTodo} onChange={e => store.newTodo = e.target.value} />
            {/* <Input /> */}
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
                Submit
            </Button>
        </Form.Item>
    </Form>
}

export default observer(InputTodo);