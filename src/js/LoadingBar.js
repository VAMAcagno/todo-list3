import React, { useEffect } from 'react'
import LoadingBarComponent from './LoadingBarComponent.js';
import CompletedPercentage from './CompletedPercentage.js';
import '../css/loadingbar.css';

function LoadingBar({tasksLeft, tasksTotal}) {
  let percentage = ((tasksTotal-tasksLeft)/tasksTotal) * 100;
  if (!percentage) {
    percentage = 0;
  } else {
    percentage = percentage.toFixed(0);
  }

  const [message, setMessage] = React.useState('');

  React.useEffect(() => {
    if(!(percentage != 100)) {
      setMessage('You completed all tasks!');
    }
  }, [percentage]);

  return (
    <div className='loading-div'>
        <LoadingBarComponent />
        { (percentage !=100 ) ? <p className='percentage'>{percentage}% Completed</p> :
        <p className='percentage'>{message}</p> }
    </div>
  );
}

export default LoadingBar