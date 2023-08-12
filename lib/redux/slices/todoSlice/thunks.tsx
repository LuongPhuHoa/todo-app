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




