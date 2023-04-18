import React, { Fragment } from 'react';
import './App.css';
import Header from './js/Header.js';
import LoadingBar from './js/LoadingBar';
import NewTask from './js/NewTask.js';
import OnGoingTasks from './js/OnGoingTasks.js';
import MobileNewTask from './js/MobileNewTask.js';
import Modal from './js/Modal.js';
import { isLaptopDevice, isMobileDevice, isTabletDevice } from "responsive-react";
import { ModalContext } from './js/ModalContext';

function App() {
  const {modal} = React.useContext(ModalContext);

  return (

    <div className='main-container'>
          <Header />
          <LoadingBar/>
          {isLaptopDevice() && <NewTask/>}
          <OnGoingTasks />
          {(isTabletDevice() || isMobileDevice()) && <MobileNewTask />}
          {modal && <Modal />}
    </div>
  );
}

export default App;