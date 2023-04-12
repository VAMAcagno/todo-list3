import React from 'react';
import '../css/header.css';

function Header({tasksLeft, tasksTotal}) {
  const date = new Date();
  const dateString = date.toDateString();

  return (
    <div className='header-div'>
        <div >
        <h1>MOVIES</h1>
        <h1>LIST</h1>
        </div>

        <div>
            <p className='date'>{dateString}</p>
            <h2>{tasksLeft}/{tasksTotal} tasks left</h2>
        </div>
    </div>
  )
}

export default Header