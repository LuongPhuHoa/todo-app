import { createAppAsyncThunk } from '@/lib/redux/createAppAsyncThunk';
import { Todo } from '../../../../database/models';
import { db } from '@/database';

export const addTodoAsync = createAppAsyncThunk(
    'todo/addTodo',
    async (todo: Todo) => {
        const { title, userId } = todo;
        const newTodo = new Todo(
            userId,
            title,
        );

        await db.todoDatabase.add(newTodo);

        return newTodo;
    },
);

export const deleteTodoAsync = createAppAsyncThunk(
    'todo/deleteTodo',
    async (todo: Todo) => {
        await db.todoDatabase.delete(todo.id  as number);
        return todo;
    }
);

export const updateTodoAsync = createAppAsyncThunk(
    'todo/updateTodo',
    async (todo: Todo) => {
        await db.todoDatabase.update(todo.id as number, todo);
        return todo;
    }
);



