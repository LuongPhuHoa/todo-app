import { todoSlice, useSelector, useDispatch } from '@/lib/redux';
import Image from 'next/image';

export const Task = () => {
    const todos = useSelector((state) => state.todo.todos);
    const dispatch = useDispatch();

    const handleToggle = (id: number) => {
        dispatch(todoSlice.actions.toggleTodo(id));
    };
    const handleRemove = (id: number) => {
        dispatch(todoSlice.actions.removeTodo(id));
    };

    return (
        <div className="flex justify-between p-5">
            <ul className="flex flex-col justify-between items-center w-full">
                {todos.map((todo) => (
                        <li key={todo.id} className="flex justify-between p-2 gap-10 w-full items-center">
                            <input type="checkbox" className="rounded-sm p-2" checked={todo.completed} onChange={() =>  handleToggle(todo.id)}/>
                            <p className="text-left self-start">{todo.title}</p>
                            <button onClick={() => handleRemove(todo.id)}>
                                <Image src="/remove.svg" alt="icon" width={20} height={20} />
                            </button>
                        </li>
                ))}
            </ul>
        </div>
    )
}