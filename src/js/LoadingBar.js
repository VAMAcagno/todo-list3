import React, { useEffect } from 'react'
import LoadingBarComponent from './LoadingBarComponent.js';
import CompletedPercentage from './CompletedPercentage.js';
import '../css/loadingbar.css';
import { TodoContext } from './TodoContext/index.js';

function LoadingBar() {
  const {tasksLeft, tasksTotal} = React.useContext(TodoContext);
  let percentage = ((tasksTotal-tasksLeft)/tasksTotal) * 100;
  if (!percentage) {
    percentage = 0;
  } else {
    percentage = percentage.toFixed(0);
  }

  return (
    <div className='loading-div'>
        <LoadingBarComponent />
        { (percentage !=100 ) ? <p className='percentage'>{percentage}% Completed</p> :
        <p className='percentage'>You completed all tasks!</p> }
    </div>
  );
}

export default LoadingBar