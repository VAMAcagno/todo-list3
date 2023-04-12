import React from 'react';
import './App.css';
import Header from './js/Header.js';
import LoadingBar from './js/LoadingBar';
import NewTask from './js/NewTask.js';
import OnGoingTasks from './js/OnGoingTasks.js';
import MobileNewTask from './js/MobileNewTask.js';

function App() {
  const [error, setError] = React.useState(false);
  const [todos, setTodos] = React.useState([]);

  React.useEffect(() => {
    try {
      const localStorageTodos = localStorage.getItem('TODOS_V1');
    
      if (!localStorageTodos) {
        localStorage.setItem('TODOS_V1', JSON.stringify([]));

      } else {
        setTodos(JSON.parse(localStorageTodos));
      }
    } catch (error) {
      setError(error);
    }
  }, []);

  const tasksTotal = todos.length;
  const tasksLeft = todos.filter(todo => todo.completed == false).length;

  return (
    <div className='main-container'>
      <Header tasksTotal={tasksTotal} tasksLeft={tasksLeft} />
      <LoadingBar tasksTotal={tasksTotal} tasksLeft={tasksLeft} />
      <NewTask todos={todos} setTodos={setTodos} error={error} setError={setError} />
      <OnGoingTasks todos={todos} setTodos={setTodos} error={error}/>
      
      {/* <MobileNewTask /> */}
    </div>
  );
}

export default App;