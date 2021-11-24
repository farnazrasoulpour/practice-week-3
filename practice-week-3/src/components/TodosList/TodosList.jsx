import Todo from '../Todo';
import "./TodosList.css"

const TodosList = ({ todos, handleDeleted } ) => {

    console.log(todos);
    if (!todos.length) return <div style={{marginTop:50}}>list is Empty</div>
    return <div className="item">{todos.map((item)=> <Todo key={item.id} todo={item} handleDeleted={handleDeleted}/>)}</div>


};

export default TodosList;
