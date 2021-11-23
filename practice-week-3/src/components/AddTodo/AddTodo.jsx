import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './Addtodo.css';

const AddTodo = ({ todos, setTodos }) => {
    const [todoText, setTodoText] = useState("");


    const addTodo = () => {
        if(todoText.length > 0){

            const updatedTodos = [...todos,
            { id: uuid(), text: todoText, completed: false }];
            setTodos(updatedTodos)
            setTodoText("")

        } 
    }

    return (
        <div className='root'>

            <input
                value={todoText}
                onChange={(event) => setTodoText(event.target.value)}
                placeholder='todo...' />
            <button onClick={addTodo}>Add</button>

        </div>
    )
};

export default AddTodo;