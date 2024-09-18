import React from 'react'
import { useDispatch } from 'react-redux';
import { removeTodo } from '../Atom/Slices/todoSlice';

function TodoAtom({todo}) {
    console.log(todo);
    const dispatch = useDispatch();
    return (
        <div className='flex justify-between border-[1px] border-slate-700'>
            <div className='flex gap-3'>
                <input type="checkbox" />
                <div>{todo.content}</div>
            </div>
            <div className='flex justify-between gap-4'>
                <button>Edit</button>
                <button onClick={() => dispatch(removeTodo(todo.id))}>Delete</button>
            </div>
        </div>
    )
}

export default TodoAtom
