import React from 'react'
import '../css/onGoingTaskComponent.css';
import { TodoContext } from './TodoContext';

function OnGoingTaskComponent({taskText, completed, category, deleteTask, completeTask}) {
  const {laptopSize, biggerL} = React.useContext(TodoContext);

  return (
    <div className={'task-div ' + (completed ? 'task-div-complete' : '')}>
      <div className='task-text-div'>
      <h2 className={completed ? 'taskChecked' : 'title'}>{taskText}</h2>
        <p className={completed ? 'taskChecked' : 'task-type'}>{category}</p>
      </div>

      <div className='task-icons'>
        <label className='check-box' htmlFor='check-box-1'>
        <input type={'checkbox'} className="task-check" id='check-box-1'></input>
        <div className={'checkbox-complete ' + (completed ? 'checkbox-checked' : '')} onClick={completeTask}></div>
        </label>
        <div className='checkbox-delete' onClick={deleteTask}>X</div>
      </div>
    </div>
  )
} 

export default OnGoingTaskComponent