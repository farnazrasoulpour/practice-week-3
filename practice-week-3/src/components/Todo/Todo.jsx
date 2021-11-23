
const Todo = ({todo ,handleDeleted}) => {



    return <div>{todo.text}
    
    <button onClick={() => handleDeleted(todo.id)}>حذف</button>

    </div>
}

export default Todo;