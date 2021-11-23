import { useState } from 'react';
import AddTodo from '../AddTodo';
import TodosList from '../TodosList';
import './Content.css';

const Content = () => {
    const [todos, setTodos] = useState([]);

    const handleDeleted = (id) => {
        const updatedList =

            [...todos]
        const result = updatedList.filter((item) => item.id !== id)
        setTodos(result)
    }

    return (
        <div className='content'>
            <AddTodo todos={todos} setTodos={setTodos} />
            <TodosList todos={todos} handleDeleted={handleDeleted} />

        </div>
    )
};

export default Content;
