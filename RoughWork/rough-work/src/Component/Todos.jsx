import React from 'react'
import { addTodo } from '../Atom/Slices/todoSlice';
import { useDispatch, useSelector } from 'react-redux';
import TodoAtom from './TodoAtom';

function Todos() {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos)
    const handleAddTodo = (e) => {
        e.preventDefault();
        const todo = e.target.content.value
        console.log(todo);
        dispatch(addTodo(todo));
        e.target.content.value = '';
    }
    return (
        <>
            <form onSubmit={handleAddTodo}>
                <input type='text'
                    name='content'
                    placeholder='Enter todo...'
                />
                <button type='submit'>Add</button>
            </form>

            {todos?.length > 0 ? todos.map((todo) => (
                <div key={todo.id}>
                    <TodoAtom todo={todo} />
                </div>
            ) ) : null}
        </>
    )
}

export default Todos
