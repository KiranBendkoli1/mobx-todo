import { Checkbox, Table } from 'antd';
import { useEffect } from 'react'
import store, { Todo } from '../store/store';

import { observer } from 'mobx-react';
import { AiOutlineDelete } from 'react-icons/ai';

// type Props = {}

const TodoTable = () => {
    const handleDelete = (id: string) => {
        // store.removeTodo(id);
        store.deleteTodosFromApi(id);
    }
    const handleComplete = (id: string) => {
        // store.completeTodo(id);
        store.completeTodoApi(id);
    }
    useEffect(() => {
        store.getTodosFromApi()
    }, [])
    const columns = [
        {
            title: 'Task',
            dataIndex: 'text',
            key: 'text',
        },
        {
            title: 'Is Completed',
            dataIndex: 'done',
            key: 'done',
            render: (val: boolean, data: Todo) => <Checkbox checked={val} onClick={() => handleComplete(data.id)} />
        },
        {
            title: 'Delete',
            dataIndex: 'done',
            key: 'done',
            render: (_: boolean, record: Todo) => <AiOutlineDelete onClick={() => handleDelete(record.id)} />
        },
    ];
    return (
        <Table dataSource={store.todos} columns={columns} />
    )
}

export default observer(TodoTable)