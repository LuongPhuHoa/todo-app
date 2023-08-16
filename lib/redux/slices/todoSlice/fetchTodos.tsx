import { createAppAsyncThunk } from "../../createAppAsyncThunk";

export const fetchTodos = createAppAsyncThunk( "todos/fetchTodos", async () => {
    const response = await fetch( "http://localhost:3001/todos" );
    return await response.json();
} );