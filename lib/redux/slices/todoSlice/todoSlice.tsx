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
        addTodo: (state, action: PayloadAction<Todo>) => {
            state.todos.push(action.payload);
        },
        removeTodo: (state, action: PayloadAction<number>) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
        toggleTodo: (state, action: PayloadAction<number>) => {
            const todo = state.todos.find((todo) => todo.id === action.payload);
            if (todo) {
                todo.completed = !todo.completed;
            }
        },
        setTodos: (state, action: PayloadAction<Todo[]>) => {
            state.todos = action.payload;
        },
        fetchTodos(state, action){
            state.todos = action.payload;
        }
    }
});

export const { addTodo, removeTodo, toggleTodo, fetchTodos } = todoSlice.actions;

export default todoSlice.reducer;