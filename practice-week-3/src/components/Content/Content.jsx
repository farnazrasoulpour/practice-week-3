import AddTodo from '../AddTodo';
import TodosList from '../TodosList';
import './Content.css';

const Content = () => {
    return (
         <div className='content'>
          <AddTodo/>
          <TodosList/>
         </div>
    )
};

export default Content;
