import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface Todo {
    id: number;
    taskName: string;
    completed: boolean;
    userID: number;
}

export interface TodoState {
    todos: Todo[];
}

const initialState: TodoState = {
    todos: [],
};

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload);
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
        toggleTodo: (state, action) => {
            const todo = state.todos.find((todo) => todo.id === action.payload);
            if (todo) {
                todo.completed = !todo.completed;
            }
        },
        fetchTodos(state, action){
            state.todos = action.payload;
        }
    }
});

export const { addTodo, removeTodo, toggleTodo, fetchTodos } = todoSlice.actions;

export default todoSlice.reducer;