import React from 'react';
import '../css/newtask.css';

let result;

function NewTask({todos, setTodos, setError}) {

  const keyNew = (event) => {
    if (event.key === 'Enter') {
      addNewTask();
    }
  }

  const addNewTask = () => {
    try {
      let inputText = document.querySelector('.new-task-input');
      if (!inputText.value || !result) {
        return;
      } else {
        const newTodo = {taskText: inputText.value, completed: false, category: result};
        todos.unshift(newTodo);
        const newTodoList = todos.slice();
        localStorage.setItem('TODOS_V1', JSON.stringify(newTodoList));
        setTodos(newTodoList);
        inputText.value = "";
      }
    } catch (error) {
      setError(error);
    }
  }
  
  function handleChange(event) {
    result = event.target.value;
  }

  return (
    <div className='new-task-div'>
      <div className='upper-div'>
      <input placeholder='Add new task...' className='new-task-input'
         onKeyDown={keyNew}
      ></input>
        <button className='add-button' onClick={addNewTask}>+</button>
      </div>
      <div className='lower-div'>
      <input type="radio" name="typeContent" value="Movie" id="movie" onChange={handleChange}/>
      <label for="movie" className='typeContent'>Movie</label>
      <input type="radio" name="typeContent" value="TV Show" id="tvshow"  onChange={handleChange}/>
      <label for="tvshow" className='typeContent'>TV Show</label>
      </div>
    </div>
  )
}

export default NewTask