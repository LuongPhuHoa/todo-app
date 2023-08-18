import { Todo, addTodo, removeTodo, toggleTodo, fetchTodos } from "./todoSlice";
import axios from "axios";

export const addTodoAsync = (todo: Todo) => async (dispatch: any) => {
    const newTodo = await axios.post("/api/createTodo", todo);
    dispatch(addTodo({
        id: newTodo.data.todo.id,
        taskName: newTodo.data.todo.taskName,
        completed: newTodo.data.todo.completed,
        userID: newTodo.data.todo.userID,
    }));
}

export const removeTodoAsync = (id: number) => async (dispatch: any) => {
    const todo = await axios.post("/api/removeTodo", { id });
    dispatch(removeTodo(todo.data.todo.id));
}

export const toggleTodoAsync = (id: number) => async (dispatch: any) => {
    const todo = await axios.post("/api/toggleTodo", { id });
    dispatch(toggleTodo(todo.data.todo.id));
}

export function getTodos(userID: number) {
    return async function fetchTodosThunk(dispatch: any) {
        const { data } = await axios.post("/api/todo", { userID });
        console.log(data);
        dispatch(fetchTodos(data.todos));
    }
}