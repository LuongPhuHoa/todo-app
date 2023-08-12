import { useState } from 'react';
import { 
  useDispatch, 
  useSelector,
  todoSlice,
  addTodoAsync,
} from '@/lib/redux';
import { Todo } from '@/database';

interface ModalProps {
  setModalState: (state: boolean) => void;
}

export const Modal: React.FC<ModalProps> = ({ setModalState }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  
  const { user } = useSelector((state) => state);

  const handleAddTodo = () => {
    const todo = new Todo( Number(user.id), name );
    dispatch(addTodoAsync(todo));
    setModalState(false);
  };

  return (
    <>
      <div className="fixed inset-0 opacity-25 bg-black" />
      <div className="fixed inset-0 flex justify-center items-center z-10">
        <div className=" bg-pink-100 rounded-xl flex flex-col justify-between items-center p-2 h-40 w-80">
          <h1 className="text-lg font-normal text-center p-2">Enter Task</h1>
          <input
            type="text"
            className=" rounded-3xl p-2 px-5"
            placeholder="Task"
            onChange={(e) => setName(e.target.value)}
          />
          <div className="flex justify-between items-center p-2 gap-5">
            <button
              className="bg-pink-300 text-white rounded-md p-2 text-sm w-24 hover:bg-pink-400"
              onClick={handleAddTodo}
            >
              Add
            </button>
            <button
              className="bg-pink-50 text-black rounded-md p-2 text-sm w-24 hover:bg-pink-200"
              onClick={() => setModalState(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
