import { 
    todoSlice, 
    useSelector, 
    useDispatch,
    toggleTodoAsync,
    removeTodoAsync,
    getTodos
} from '@/lib/redux';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { getCookie } from 'cookies-next';

export const Task = () => {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todo.todos);
    const userID = getCookie("id");

    useEffect(() => {
        dispatch(getTodos(Number(userID)));
    }, []);

    const handleToggle = (id: number) => {
        dispatch(toggleTodoAsync(id));
    }

    const handleRemove = (id: number) => {
        dispatch(removeTodoAsync(id));
    }

    return (
        <div className="flex justify-between p-5">
            <ul className="flex flex-col justify-between items-center w-full">
                {todos.map((todo) => (
                        <li key={todo.id} className="flex justify-between p-2 gap-10 w-full items-center">
                            <input type="checkbox" className="rounded-sm p-2" checked={todo.completed} onChange={() =>  handleToggle(todo.id)}/>
                            <p className="text-left self-start">{todo.taskName}</p>
                            <button onClick={() => handleRemove(todo.id)}>
                                <Image src="/remove.svg" alt="icon" width={20} height={20} />
                            </button>
                        </li>
                ))}
            </ul>
        </div>
    )
}