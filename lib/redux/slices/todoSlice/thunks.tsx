import { createAppAsyncThunk } from '@/lib/redux/createAppAsyncThunk';
import { fetchTodo } from './fetchTodo'
import { Todo } from '../../../../database/models';
import { ReduxThunkAction } from '../../store';
import { todoSlice } from './todoSlice'
import { selectTodos } from './selectors';

export const addTodoAsync = createAppAsyncThunk( 
    'todo/fetchTodos',
    async (todo: Todo) => {
        const task = await fetchTodo(todo);

        return task.data;
    },
);

// export const AddTodoAsync = (todo: Todo): ReduxThunkAction => (dispatch, getState) => {
//     const todos = selectTodos(getState());

//     const isTodoExist = todos.find((item) => item.title === todo.title);

//     if (isTodoExist) {
//         return;
//     }

//     dispatch(todoSlice.actions.addTodo(todo));
// }


