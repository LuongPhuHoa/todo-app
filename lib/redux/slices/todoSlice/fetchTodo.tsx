import { Todo } from './models';

export const fetchTodo = async (todo: Todo) => {
    return new Promise<{ data: Todo }>((resolve) => {
        setTimeout(() => {
            resolve({ data: todo });
        }, 1000);
    });
}