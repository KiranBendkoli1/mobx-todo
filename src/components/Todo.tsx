import { Checkbox } from "antd"
import { AiOutlineDelete } from "react-icons/ai"
import store from "../store/store"
type Props = {
    id: string,
    text: string,
    done: boolean
}

const Todo = ({ id, text, done }: Props) => {
    const handleDelete = () => {
        // store.removeTodo(id);
        store.deleteTodosFromApi(id);
    }
    const handleComplete = () => {
        // store.completeTodo(id);
        store.completeTodoApi(id);
    }
    return (
        <div key={id}>

            {
                !done ? <div style={{ display: "flex", justifyContent: "space-around", minWidth: "200px" }}>
                    <Checkbox checked={done} onClick={handleComplete} /> {text}  <AiOutlineDelete onClick={handleDelete} />
                </div> : done && <div style={{ display: "flex", justifyContent: "space-around", minWidth: "200px" }}>
                    <Checkbox checked onClick={handleComplete} /> <span style={{ color: "gray" }}>{text}</span><AiOutlineDelete onClick={handleDelete} />
                </div>
            }
        </div>
    )
}

export default Todo