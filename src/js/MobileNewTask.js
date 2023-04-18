import React from 'react';
import '../css/mobileNewTask.css';
import { ModalContext } from './ModalContext';

function MobileNewTask() {
  const {modal, setModal, modalToggler} = React.useContext(ModalContext);

  return (
    <div className='mobile-tak-div' onClick={modalToggler}>
      <p>+</p>
    </div>
  )
}

export default MobileNewTask