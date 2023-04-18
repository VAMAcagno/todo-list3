import React from 'react';
import OnGoingTaskComponent from './OnGoingTaskComponent.js';
import '../css/onGoingTask.css';
import { TodoContext } from '../TodoContext/index.js';

function OnGoingTasks() {

  const {todos, error, completeTask, deleteTask, laptopSize} = React.useContext(TodoContext);
  //const size = isLaptopDevice();

  // const deleteTask =  (index) => {
  //   const newTodos = todos.slice();
  //   newTodos.splice(index, 1)
  //   localStorage.setItem('TODOS_V1', JSON.stringify(newTodos));
  //   setTodos(newTodos);
  // }

  // const completeTask = (index) => {
  //   if (todos[index].completed === false) {
  //     const newTodos = todos.slice();
  //     const doneTodo = todos[index];
  //     newTodos[index].completed = !newTodos[index].completed;
  //     newTodos.splice(index, 1);
  //     newTodos.push(doneTodo);
  //     localStorage.setItem('TODOS_V1', JSON.stringify(newTodos));
  //     setTodos(newTodos);
  //   } else {
  //     const newTodos = todos.slice();
  //     const doneTodo = todos[index];
  //     doneTodo.completed = !doneTodo.completed;
  //     newTodos.splice(index, 1);
  //     newTodos.unshift(doneTodo);
  //     localStorage.setItem('TODOS_V1', JSON.stringify(newTodos));
  //     setTodos(newTodos);
  //   }
  // }

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