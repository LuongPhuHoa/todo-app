import { Todo } from '@/database/models';

export const fetchTodo = async (todo: Todo): Promise<{data: Todo}> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({data: todo});
        }, 1000);
    });
}