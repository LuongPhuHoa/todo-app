import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { Todo, TodoState } from "@/database";

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
            state.todos = state.todos.map((todo) => {
                if (todo.id === action.payload) {
                    return { ...todo, completed: !todo.completed };
                }
                return todo;
            });
        },
        setTodo: (state, action: PayloadAction<Todo[]>) => {
            state.todos = action.payload;
        },
    },
});

export const { addTodo, removeTodo, toggleTodo } = todoSlice.actions;

export const Todostore = todoSlice.reducer;