import React from 'react';
import '../css/newtask.css';
import { TodoContext } from './TodoContext';

//let result;

function NewTask() {

  const {addNewTask, handleChange} = React.useContext(TodoContext);

  const keyNew = (event) => {
    if (event.key === 'Enter') {
      addNewTask();
    }
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