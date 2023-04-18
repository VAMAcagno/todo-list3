import React, { Fragment } from 'react';
import '../css/header.css';
import { TodoContext } from '../TodoContext';
import { IdResponsiveRenderOnlyIn, Responsive, useMediaQuery } from 'responsive-react';

function Header() {
  const date = new Date();
  const dateString = date.toDateString();
  const {tasksLeft, tasksTotal} = React.useContext(TodoContext);

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