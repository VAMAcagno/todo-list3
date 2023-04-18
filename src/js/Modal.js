import React from 'react';
import '../css/modal.css';
import { TodoContext } from '../TodoContext';
import { ModalContext } from './ModalContext';

let result;

function Modal() {
  const {modalToggler, handleChangeMobile, addNewTaskMobile} = React.useContext(ModalContext);


  return (
    <div className='modal-div'>
      <div className='modal-card'>

        <input placeholder='Add new task...' className='new-task-input-mobile'></input>
          

        <div className='lower-div-mobile'>
          <input className='radio-mobile' type="radio" name="typeContent" value="Movie" id="movie" onChange={handleChangeMobile}/>
          <label for="movie" className='typeContent-Mobile'>Movie</label>
          <input className='radio-mobile' type="radio" name="typeContent" value="TV Show" id="tvshow"  onChange={handleChangeMobile}/>
          <label for="tvshow" className='typeContent-Mobile'>TV Show</label>
        </div>

        <div className='button-div-mobile'>
        <button className='add-button-mobile' onClick={modalToggler}>CANCEL</button>
        <button className='add-button-mobile' onClick={addNewTaskMobile}>ADD TASK</button>
        </div>

      </div>
    </div>
  )
}

export default Modal