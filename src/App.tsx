import { Card } from "antd"
import InputTodo from "./components/InputTodo"
import TodoListObeservable from "./components/TodoList"
import TodoTable from "./components/TodoTable"

function App() {
 
  
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>TODO List Application</h1>

      <Card style={{ display: "flex", justifyContent: "center", marginTop: "2rem", }}> <InputTodo /></Card>
      <Card>
        <TodoTable />
      </Card>
    </div>

  )
}

export default App
