import Todo from '../Todo';

const TodosList = ({ todos, handleDeleted } ) => {
    if (!todos.length) 
    return 
    <div style={{marginTop:50}}>List is Empty!</div>
   
    return <div>
        {todos.map((item) => <Todo 
           key={item.id} todo={item} 
           handleDeleted={handleDeleted}/>)}
    </div> 
};

export default TodosList;
