import { observer } from "mobx-react"
import store from "../store/store"
import Todo from "./Todo"
import { Card, List } from "antd"
import { useEffect } from "react"

// type Props = {}

const TodoList = () => {
  useEffect(() => {
    store.getTodosFromApi()
  }, [])
  console.log(store.todos)
  return (
    <div style={{display:'flex', justifyContent:"center"}} >
      {/* <Divider orientation="left">Tasks to Accomplish</Divider> */}
      <Card>
      <List
        size="small"
        
        style={{width:"400px"}}
        dataSource={store.todos}
        renderItem={(todo) => <Todo id={todo.id} text={todo.text} done={todo.done} />}
      />
      </Card>
    </div>
  )
}
const TodoListObeservable = observer(TodoList)
export default TodoListObeservable