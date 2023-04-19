import React from 'react';
import OnGoingTaskComponent from './OnGoingTaskComponent.js';
import '../css/onGoingTask.css';
import { TodoContext } from './TodoContext/index.js';

function OnGoingTasks() {

  const {todos, error, completeTask, deleteTask} = React.useContext(TodoContext);
  //const size = isLaptopDevice();

    return (
      <>
     { todos.length === 0 ? (<div className='first-todo-div'><p className='first-todo'>Create your first TODO.</p></div>) : 
      error ? (<div className='first-todo-div'><p className='first-todo'>An Error Ocurred, please reload and try again.</p></div>) :
      (<div className={'task-main-div'}>
        {todos.map((todo, i) => (
          <OnGoingTaskComponent taskText={todo.taskText} completed={todo.completed}
           key={todo.key} category={todo.category} deleteTask={() => deleteTask(i)}
          completeTask={() => completeTask(i)}
          />
        ))}
      </div>)}
      </>
    )
}

export default OnGoingTasks