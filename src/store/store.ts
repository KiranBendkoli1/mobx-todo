import axios from "axios";
import { action, makeObservable, observable } from "mobx";

export type Todo = {
    id: string,
    text: string,
    done: boolean
}

class Store {
    todos: Todo[] = []
    newTodo: string = ""
    constructor() {
        makeObservable(this, {
            todos: observable,
            newTodo: observable,
            addTodo: action,
            removeTodo: action,
            completeTodo: action, getTodosFromApi: action, postTodosToApi: action, deleteTodosFromApi: action
        })
    }
    addTodo() {
        const obj = { id: `${Math.random() * 100} ${this.newTodo}`, text: this.newTodo, done: false }
        this.todos = [...this.todos, obj]
        console.log(this.todos)
        return obj;
    }
    removeTodo(id: string) {
        this.todos = this.todos.filter(todo => todo.id !== id)
    }
    completeTodo(id: string) {
        const i = this.todos.findIndex(obj => obj.id === id);
        const val = { ...this.todos[i], done: !this.todos[i].done }
        this.todos = this.todos.filter(todo => todo.id !== id)
        this.todos.push(val)
        return val;
    }
    getTodosFromApi = async () => {
        try {
            const response = await axios.get("https://64f1c7d10e1e60602d24445e.mockapi.io/todos")
            this.todos = response.data;
        } catch (error) {
            console.log(error)
        }
    }
    postTodosToApi = async () => {
        try {
            const obj = this.addTodo();
            const response = await axios.post("https://64f1c7d10e1e60602d24445e.mockapi.io/todos", obj);
            console.log(response.data)
        } catch (error) {
            console.log(error)
        }
    }
    deleteTodosFromApi = async (id: string) => {
        try {
            this.removeTodo(id);
            await axios.delete(`https://64f1c7d10e1e60602d24445e.mockapi.io/todos/${id}`);
        } catch (error) {
            console.log(error)
        }
    }
    completeTodoApi = async (id: string) => {
        try {
            const val = this.completeTodo(id);
            await axios.put(`https://64f1c7d10e1e60602d24445e.mockapi.io/todos/${id}`, val);
        } catch (error) {

        }
    }

}

const store = new Store()

export default store